"use strict";
//goal -> understand when to let typescript infer types
//ts --> knows ts very well
//so it means,we must know when ts will writes the types and when we will write the types by ourselves
Object.defineProperty(exports, "__esModule", { value: true });
let count = 0; //now this is called typescript inference.TS sees count as number.you can not used it for other variables
const scores = [1, 2, 3, 4];
//  over type annotation is't bad just it is noisy and messy for no reason
function sum(a, b) {
    return a + b;
}
//you should also annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
//# sourceMappingURL=01_inference.js.map