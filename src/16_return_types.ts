//inference example 

const doubleFunction = (n: number) => n * 2

console.log(doubleFunction(2));

//if input parameter is boolean but return type is number we have to mention explicitly

function booleanToNumber(flag: boolean): number {

    // if (flag) {
    //     return 1
    // }
    // else {
    //     return 0
    // }
    return flag ? 1 : 0 //same same
}

console.log(booleanToNumber(true));
