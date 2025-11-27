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

}