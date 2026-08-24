//we will be learning about function and similar things


//always mention return type in function dont rely on inference.

function func1(a: number, b: number): number {
    return a + b
}

console.log(func1(12, 13));


const nums12 = [1, 2, 3]

const double = nums12.map(e => e * 2)

const result = (n: number) => n * 2 //always give annotation in these case


//annotating in objects


type Points = { x: number, y: number }

function distanceFromOrigin(p: Points) {
    return Math.hypot(p.x, p.y)
}

console.log(distanceFromOrigin({ x: 2, y: 2 }));


