
//ReturnType<F>


function ExtraUserInfo(id: string, isExtraInfo: false) {

    return {
        id,
        name: "sachin",
        log: isExtraInfo ? "details" : (undefined as string | undefined)
    }


}


type GetUserReturnInfo = ReturnType<typeof ExtraUserInfo>
type GetUserParamsInfo = Parameters<typeof ExtraUserInfo>

const argsInfo: GetUserParamsInfo = ["1", false]
const resultInfo: GetUserReturnInfo = ExtraUserInfo(...argsInfo)


class Person1 {
    constructor(public name: string, public age: number) { }

    greet() {
        return `Hi i am -> ${this.name}`
    }
}

type personInstanceType = InstanceType<typeof Person1>
type personContructorParameterType = ConstructorParameters<typeof Person1>

const personData: personContructorParameterType = ["sachin", 29]
const personObject: personInstanceType = new Person1(...personData)


console.log(personObject.greet());

