// when to use types
// object shapes --> same as interfaces
// union types --> (a | b)  //interfaces can't do this 
// intersection types --> (a & b)


//normal types defining
type Person = {
    id: string,
    address: string,
    salary: number
}

const person1: Person = {
    id: "1",
    address: "KTM",
    salary: 10000
}
//types is used for union or intersetion defining like
type status = 'new' | 'pending' | 'paid'

function actionChecker(s: status): string {
    switch (s) {
        case "new":
            return "new"
        case "paid":
            return "paid"
        case "pending":
            return "pending"
        default:
            return "default"

    }

}
