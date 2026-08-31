//generics is a function where the types are  blank and you fill the types later 
//simply generics gives you power to work with multiple datatypes
function id<T>(x: T) {
    return x
}
// infers T or types means--

// console.log(id(4)); --> T is a number
// console.log(id("sachin")); --> T is a string
// console.log(id<string>("sachin")); -->you can also mention types instead letting ts to infer



function example<T>(arr: T[]): T | undefined {
    return arr[0]
}

console.log(example([1, 2, 3, 4]));


