

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



function draw(x: number, y: number) {
    console.log(x, y);

}
const points = [1, 2]
// draw(...points) not a fixed[number,number] tuple so give error
//above explain: parameter of draw is expecting fixed two values but while calling typescript assumes
// points/values  could be:
// [1, 2]
// [10, 20]
// [1, 2, 3]
// []
// [100]
// so it gives error


const filxedPints = [1, 2] as const
draw(...filxedPints)   //now this becomes readonly fixed tuple



