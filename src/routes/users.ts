import { Router } from "express";

const userRouter = Router({ caseSensitive: true, strict: true });

userRouter.get('/', (req, res)=> {

    res.send("Hello World from users!")
})

export default userRouter