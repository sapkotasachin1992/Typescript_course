//partial<T> --> makes all the top level fields optional

type Address = {
    line1: string,
    city: string
}

type User = {
    id: string,
    name: string,
    email?: string,
    address: Address
}

// const userData: User = {
//     id: "1",
//     name: "sachin",
//     email: "sachin@gmail.com",
//     address: {
//         line1: "shreetol",
//         city: "kathmandu"
//     }
// }

type makePartial = Partial<User>

const userData: makePartial = {
    id: "1"
}


//Required<T>

type makeRequired = Required<User>

//--> Now including all feilds email is also required


//Readonly<T>

type makeReadonly = Readonly<User>

const userData1: makeReadonly = {
    id: "1",
    name: "sachin",
    email: "someone@gmail.com",
    address: {
        line1: "shreetol",
        city: "ktm"
    }
}

// userData1.id = "2"  --> you can not change the value



//Pick<T,K> --> pick the keys you want from the usertype

type makePick = Pick<User, "id" | "name">

const userData2: makePick = {
    id: "1",
    name: "sachin",

}


//Omit<T,K> -->Remove the keys you want from the usertype

type makeOmit = Omit<User, "address">

const userData3: makeOmit = {
    id: "1",
    name: "sachin",
    email: "sachin@gmail.com",
}

//Record<K,V>

type Role = "admin" | "user" | "editor"

type makeRecord = Record<Role, User>

const userData4: makeRecord = {
    "admin": { id: "1", name: "sachin", email: "n@gmail.com", address: { line1: "shreetol", city: "ktm" } },
    "user": { id: "1", name: "sachin", email: "a@gmail.com", address: { line1: "shreetol", city: "ktm" } },
    "editor": { id: "1", name: "sachin", email: "s@gmail.com", address: { line1: "shreetol", city: "ktm" } },
}

