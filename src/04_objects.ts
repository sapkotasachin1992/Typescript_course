type User = {

    id: string //this means the object must have property id with string type
    name: string
    email?: string //email is optional 
    readonly createdAt: Date // it means the value can not be reassigned 

}


const user1: User = {
    id: "u1",
    name: "sachin",
    createdAt: new Date()
}


type user2 = {
    email?: string
}

type user3 = {
    email: string | undefined
}

type count = { [k: string]: number }

type count1 = Record<"likes" | "views" | "shares", number>

const c1: count = {
    whatever: 1
}

const c2: count1 = {
    likes: 1,
    views: 2,
    shares: 3

}



