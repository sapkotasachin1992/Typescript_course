


type Direction = "left" | "right" | "up"

function move(d: Direction) {
    console.log(d);

}

const d1 = "left" //ts keeps literal  type "left"
move(d1)


let d2 = "left"
move(d2)  //here we get error because as we decleare d2 with let variable the value may be changed or can be changed .so it doesnot allow to do this . so make this work we have to do

let d3: Direction = "left"
move(d3)