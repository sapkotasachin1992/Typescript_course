

function sumAllNumbers(...nums: number[]) {

    return nums.reduce((total, current) => total + current, 0)

}

console.log((sumAllNumbers(10, 20, 30, 40)));

//we call below rest tuples because it has fixed size and length and type

function makeRange(...args: [start: number, end: number, step?: number]): number[] {
    const [start, end, step = 1] = args
    const out: number[] = []
    for (let n = start; n <= end; n += step) out.push(n)
    return out
}

