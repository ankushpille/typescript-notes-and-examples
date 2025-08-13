interface User1{
    name: string
}

let usertesting: User1[] = [
    {name: "ankush"},
    {name: "vijay"},
    {name:"vicky"}
]

function getUsernames(users: User1[]): string[] {
    return users.map(user => user.name)
}

console.log(getUsernames(usertesting));


