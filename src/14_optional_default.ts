
//optional parametet in function
function greetPersonOptional(name?: string): string {
    let upperCase = name?.toUpperCase()
    return `Welcome ${upperCase}`
}

console.log(greetPersonOptional("sachin"));
console.log(greetPersonOptional()); //for above case we will get undefined here as we have not handle the part where name is not given so below is best method to handle these suitation


function greetPersonOptional1(name?: string) {
    let uppercase = name ? name.toUpperCase() : "GUEST"  //use ternary operator
    return `welcome ${uppercase}`
}


console.log(greetPersonOptional1("John"));
console.log(greetPersonOptional1());


//real use case of optional parameter in function

function connect(host: string, port?: number, secure?: boolean) {
    const p = port ?? 8000
    const s = secure ?? false

    return `Connect ${host} ${p} ${s}`
}

console.log(connect('localhost', 5000, true));






///working with default paramater tooo !! easy....

function defaultParameter(name: string = "guest"): string {

    return name.toUpperCase()
}


console.log(defaultParameter("sachin"));
console.log(defaultParameter());


