//unions means either this or this . There is no other option

function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        id.toFixed()
    }


}


//object union
type admin = { role: "admin", permission: string[] }

type customer = { role: "customer", loyalityPoints: number }

function describeUser(u: admin | customer) {
    if (u.role === "admin") {
        console.log(u.permission);

    }
    else {
        console.log(u.loyalityPoints);

    }
}

//a more clean version of above code


function describeUserAgain(u: admin | customer) {
    if ("permission" in u) {
        u.permission
    }
    else {
        u.loyalityPoints
    }
}


//array of unions vs union or arrays

const arrayOfUnions: (string | number)[] = ["sacin", 12121, "into the wild"]

const unionOfArrays: string[] | number[] = Math.random() > 0.2 ? [1, 2, 3] : ["1", "2", "3"]  //this means array can be either fulll of strings or full of numbers









