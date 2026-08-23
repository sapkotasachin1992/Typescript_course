
//syntax: Type[]

const arr1: number[] = [1, 2, 3]

//another syntax : Array<type>
const arr2: Array<string> = ["s", "a", "c", "h", "i", "n"] //  This is more preferred over react

const scores = [10, 20, 30]
scores.push("sachin") //We can not push string in array of number bcz of inference or ts rule

const mix: (string | number)[] = ["1", 2, "3", 4]
