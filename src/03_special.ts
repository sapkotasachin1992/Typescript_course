

//union in typescript

let subtitile: string | undefined = "sangam"


//for any function set it's return type to void if it is not returning anything instead of leaving it as type any

function log(msg: string): void {
    console.log(msg);

}

//if your function never returns value you can use never type
// below function will never return 
function failMessage(msg: string): never {
    throw new Error(msg)
}

//note:do not use any . try to ignore as much as possible


// let's discuss a senario

let valueAny: any = JSON.parse('{"x":1}')

valueAny.notThere.toFixed(2)
// --> now this code will compile as type is any and compiler does not where the given methods exit or not. but will break in runtime as there not exit anything like notThere.toFixed()




















