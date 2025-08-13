//arrays in typescript
let a: number[] = [1,2,3]
let names: string[] = ["ankush","vijay"]

console.log(names)

//array of objects
interface User{
    name : string;
    age : number
}

const users: User[] = [
    {name: "ankush",age:22},
    {name:"vijay",age:5}
]

console.log(users[0]?.name)
