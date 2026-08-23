const basicArray = [1, 2, 3]
basicArray.push(4)
basicArray[0] = 0 // you can do these operations because above array is mutable


//basic way to create readonly array 

const arr1: readonly number[] = [1, 2, 3, 4] //immutable


//generic way to create readonly array

const arr2: ReadonlyArray<string> = ["mango", "apple", "grapes"]  //immutable

arr2.push("strawberry")   // this gives error as you can not write to readonly array 


//you can pass mutable array as function argument but receive as readonly or immutable array in function parameter


function sum(nums: readonly number[]): number {
    // nums.push(5) -->you can't do this as nums becomes immutable
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    return sum
}


console.log(sum([1, 2, 3, 4]));//mutable array
