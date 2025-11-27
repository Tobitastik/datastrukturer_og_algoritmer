function shuntingYardCalc(){
    const operators = {
        '*': {
            prec: 3,
            assoc: 'left',
        },
        '/': {
            prec: 3,
            assoc: 'left',
        },
        '+': {
            prec: 2,
            assoc: 'left',
        },
        '-': {
            prec: 2,
            assoc: 'left',
        },
    };

    const assert = (predicate) => {
        if(predicate){
            return;
        }
        throw new Error('Assertion failed, invalid token');
    };

    const toRPN = (input) => {
        const opSymbols = Object.keys(operators);
        const stack = [];
        let output = '';

    const peek = () => {
        return stack.at(-1);
    };

    //If the token is a number, it'll be added to the output
    const addToOutput = (token) => {
        output += ' ' + token;
    };

    const handlePop = () => {
        return stack.pop();
    }

    const handleToken = (token) => {
        switch(true){
            case !isNaN(parseFloat(token)):
                addToOutput(token);
                break;

            //If the token is an operator. If it have higher prec, pop it, else push
            case opSymbols.includes(token):
                const o1 = token;
                let o2 = peek();
                
                while(
                    o2 !== undefined &&
                    o2 !== '(' &&
                    (operators[o2].prec > operators[o1].prec ||
                        (operators[o2].prec === operators[o1].prec &&
                            operators[o1].assoc === 'left'))
                ) {
                    addToOutput(handlePop());
                    o2 = peek();
                }
                stack.push(o1);
                break;
            
            case token === '(':
                stack.push(token);
                break;
            
            case token === ')':
                let topOfStack = peek();
                while (topOfStack !== '('){
                    assert(stack.length !== 0);
                    addToOutput(handlePop());
                    topOfStack = peek();
                }
                assert(stack.at(-1) === '(');
                handlePop();
                break;
            default:
                throw new Error(`Invalid token: ${token}`);   
        }
    };

    for(let i of input){
        if(i === ' ') continue;
        handleToken(i);
    }

    while(stack.length !== 0){
        assert(peek() !== '(');
        addToOutput(stack.pop());
    }
    return output;
    };
    
    return{toRPN};    
}

const calc = shuntingYardCalc();

console.log(calc.toRPN("123+2")); 