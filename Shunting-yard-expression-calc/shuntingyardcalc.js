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

    const toRPN = (input) => {
        const stack = [];
        let output = '';

        for(let i of input){
            if(i === '') continue;
            
            handleToken(i);
        }

        return output;
    }

    
    const handleToken = (token) => {
        switch(true){
            //If the token is a number, it'll be added to the output
            case !isNaN(parseFloat(token)):
                output += ' ' + token;
                break;
            
            //If the token is an operator. If it have higher prec, pop it, else push
            case Object.keys(operators).includes(token):
                const o1 = token;
                let o2 = stack.at(-1);
                
                while(
                    o2 !== undefined &&
                    o2 !== '(' &&
                    (operators[o2].prec > operators[o1].prec ||
                        (operators[o2].prec === operators[o1].prec &&
                            operators[o1].assoc === 'left'))
                ) {
                    output += ' ' + stack.pop();
                    o2 = stack.at(-1);
                }
                stack.push(o1);
                break;
        }
    }

}