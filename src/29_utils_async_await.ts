//Awaited<T>
type Promise_Number = Awaited<Promise<number>>  //which means this promise will return number

//Nested Promise
//Awaited<Promise<Promise<T>>
type Promise_String = Awaited<Promise<Promise<string>>>

//awaited only
type Awaited_only = Awaited<string> //this is string, not a promise 


//union of promises
type PromiseUnion = Awaited<Promise<string | number>>

//Example of interference in promise

async function count() {
    return 42 as const
}

type ResolveCountNumber = Awaited<Promise<typeof count>>

//-------------------------------------------------------//

async function getData() {
    return Promise.all([
        Promise.resolve(1 as const),
        Promise.resolve("x" as const)
    ] as const)
}

type TupleWithPromise = Awaited<ReturnType<typeof getData>>
