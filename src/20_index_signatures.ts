
//this is used when we have to regulate key and value types
type CounterType = { [k: string]: number }

const counter: CounterType = {}

counter["likes"] = 12
counter["comments"] = 23
counter["followers"] = 2000



console.log(counter);


//let's define more safer and tighter signatures
//here we define the total number of keys and its value type
type Metrices = Record<'likes' | 'views' | 'shares', number>

const user: Metrices = {
    "likes": 2999,
    "views": 343434,
    "shares": 10
}

//when we have dynamic key at runtime insted of record we can use map

const price = new Map<string, number>()
price.set('likes', 20)
