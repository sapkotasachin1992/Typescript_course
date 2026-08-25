//interfaces is used for 
// --> to define object shapes that you expect to extend
// -->supports decleration merging


//types is used for 
// -->general objects
// -->object , unions , intersections , functions
// -->cannot be reopened --> No merging


//example of decleration merging

interface Box1 {
    width: number
}

interface Box1 {
    height: number
}

const box: Box1 = { height: 23, width: 2323 }