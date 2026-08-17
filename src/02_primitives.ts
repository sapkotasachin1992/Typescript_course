let username: string = "sachin"
let age: number = 23
let isAdult: boolean = true

const big: bigint = 2n ** 63n - 1n

// note:you can not even add or combine int and bigint
// for eg:
// const mixed=age + big

const TOKEN: unique symbol = Symbol("SACHIN")


function yearsToDay(years: number): number {

    return years * 365
}


console.log(yearsToDay(23));

