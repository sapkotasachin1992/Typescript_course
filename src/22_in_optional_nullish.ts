// Use of in
//in is used to check the whether the key is available in the given object or not

type InExample1 = { role: string, permission: string[] }
type InExample2 = { role: string, expiresAt: Date }


type UserExample = InExample1 | InExample2

function describeUser(user: UserExample) {

    if ('permission' in user) {
        return `admin ${user.role}`
    }

    else {
        return `user ${user.role}`
    }
}
console.log(describeUser({ role: "admin", permission: ["admin"] }));

//use of optional nullish
//It is used to avoid runtime crashes
//nullish types : ?? and || 
//optional chaining: obj?.value

//optional chaining

type Profile = {
    name: string,
    contact?: {
        email?: string
    }
}

const pro1: Profile = { name: "sachin" }
const pro2: Profile = { name: "john", contact: { email: "sachinsapkota" } }

const emailOfpro2 = pro2.contact?.email //This is how we use optional chain


// nullish types
// ??--> takes right hand value only when left hand value is null or undefined 
// || -->takes right hand value if the left value is falsy (0,"",null, undefined, NaN)


const countFromServer: number | null = 0

const lavelFromServer: string | undefined = ""

const data = countFromServer ?? 100 //will keep value 0
const data1 = lavelFromServer || "passed here"