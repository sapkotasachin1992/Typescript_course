
// tuples -> Fixed length and Fixed size

// syntax: (String | number)[]
const userEntry: [string, number] = ['Sachin', 29] // this becomes fixed length with one string must in first position an one number must in second position 


// optional tuples
type ResponseRow = [status: number, message?: string]

const tuple1: ResponseRow = [12]  //message becoms optional

//read only tuples 

const corners: readonly [number, number] = [0, 0]