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
}