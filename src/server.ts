import express, { Request, Response } from "express";

const app = express();

interface User  {
    name: string;
    age: number
}

app.get('/users', (req: Request,res : Response) => {
    const user: User = {name : "Ankush",age:20}
    res.send(user)
})

app.listen(3000, () => console.log("server running at 300"))