"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "sachin";
let age = 23;
let isAdult = true;
const big = 2n ** 63n - 1n;
// note:you can not even add or combine int and bigint
// for eg:
// const mixed=age + big
const TOKEN = Symbol("SACHIN");
function yearsToDay(years) {
    return years * 365;
}
console.log(yearsToDay(23));
//# sourceMappingURL=02_primitives.js.map