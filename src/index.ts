import express, { Request, Response } from "express";
import userRouter from "./routes/users";

const app = express();

app.use('/users', userRouter);

app.get('/', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json').status(200).json({m:"<h1>Hello World</h1>"});
});

app.listen(3000, () => {
    console.log(`Listening at port: ${3000}`)
})