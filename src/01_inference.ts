//goal -> understand when to let typescript infer types
//ts --> knows ts very well
//so it means,we must know when ts will writes the types and when we will write the types by ourselves

let count = 0;//now this is called typescript inference.TS sees count as number.you can not used it for other variables

const scores = [1, 2, 3, 4]

//  over type annotation is't bad just it is noisy and messy for no reason


function sum(a: number, b: number): number {
    return a + b
}


//you should also annotate when the type is not obvious

let maybe: string | number

maybe = Math.random() > 0.5 ? "test" : 10