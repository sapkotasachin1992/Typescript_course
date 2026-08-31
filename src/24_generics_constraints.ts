// <T> -->constraint T so that only certain types are allowed

// <T extends x>
function defineLength<T extends { length: number }>(data: T): number {

    return data.length
}

console.log(defineLength('sachin'));
console.log(defineLength([1, 2, 3, 4]));
console.log({ length: 10, tag: 'ok' });


//key constrainsts -> <k extends keyof T> -->k must me a key of T

type UserN6 = { id: string; name: string; age?: number };

function userN6Extract<T, K extends keyof T>(arrN4: T[], keyN4: K): Array<T[K]> {

    return arrN4.map((item) => item[keyN4]);
}

const usersN6: UserN6[] = [
    {
        id: "1",
        name: "name1",
        age: 22,
    },
    {
        id: "2",
        name: "name2",
    },
];

console.log(userN6Extract(usersN6, "id"));
console.log(userN6Extract(usersN6, "name"));