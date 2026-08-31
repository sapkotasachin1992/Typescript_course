type User = {
    id: string,
    name: string,
    email?: string
}

function getUser<T, K extends keyof T>(data: T, key_data: K): T[K] {
    return data[key_data]
}

const user1: User = {
    id: "1",
    name: "sachin",
    email: "sachin@gmail.com"
}

console.log(getUser(user1, "id"));



//above things we have already done previously too


// now here we are goint to learn how to set or update value of User
function setUser<T, K extends keyof T>(data: T, key_data: K, updated_value: T[K]): void {

    data[key_data] = updated_value

}