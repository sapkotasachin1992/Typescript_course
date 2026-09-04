//1. Exclude<U,V> -> remove from U those member assinable to V

type EventType = 'click' | 'submit' | 'hover' | 'keyup' | 'keydown'

// so now if i have to exclude keydown event then we have to do

type EventTypeExclude = Exclude<EventType, "keydown">//means remove from EventType value 'keydown"

function handleEvent(e: EventTypeExclude) {

    console.log(e);

}

handleEvent("click")

//2. Extract<U,v> Keep from U those member assinable to v

type actions = "create" | "update" | "delete" | "read"

// so now we can extract the only  values we want from above type actions

type extractType = Extract<actions, "create" | "update">

//3. Nonnullable

type mayBeNumber = number | null | undefined
type CleanNumber = NonNullable<mayBeNumber>


function square(num: CleanNumber) {
    return num * 2
}

square(12)
// square(null) --> this gives error as null is discarded


