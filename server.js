import express from "express"
import authRouter from "./routes/AuthRouter.js";
import cors from 'cors';

const app = new express()
const PORT = 8000

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT} `));
    } catch (e) {
        console.log(e);
    }
}

start();