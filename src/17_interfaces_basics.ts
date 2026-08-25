//if you are working with libraries like react and similar things then intefaces becomes much important

//interfaces --> Name shape for objects

interface userInterface {
    id: number;
    name: string;
    email?: string;
    readonly createdAt: Date;

}


const user: userInterface = {
    id: 1,
    name: "sachin",
    createdAt: new Date()

}

//inherit one interface from other. This increases code reusability
interface admin extends userInterface {
    permission: string[]
}

const upgragedUser: admin = {
    id: 1,
    name: "sachin",
    email: "xyz@gmail.com",
    createdAt: new Date(),
    permission: ["admin",]
}


interface withMeta {
    meta: {
        active: boolean
    }
}

//multiple inheritance of interfaces
interface AdminWithMeta extends admin, withMeta { }

const userNew: AdminWithMeta = {
    id: 2,
    name: "sachin",
    email: "sachin@gmail.com",
    createdAt: new Date(),
    permission: ["admin"],
    meta: {
        active: false
    }
}