//value must be everthing 

type inter1 = { id: string }
type inter2 = { createdAt: Date }


type entity = inter1 & inter2 //must have both id and createdAt


let obj: entity = {
    id: "1",
    createdAt: new Date()
}


type NumberHolderUnique = { a: number }
type StringHolderUnique = { a: string }

type NumberStringMixed = NumberHolderUnique & StringHolderUnique

let obj2: NumberStringMixed = {
    a: 12,

    //wrong :we can not assign same variable for different types if we are using intersection
}

//real world senario where intersection is used

type Product = { id: string, titile: string }

type Priced = { price: number }

type PricedProduct = Product & Priced


let items: PricedProduct = {
    id: "1",
    titile: "iphone xe",
    price: 10000
}

//note : why not just create a single type insted of these two?
//-->Because these smaller types can be used independently and merge when necessary which increases code reuseability

