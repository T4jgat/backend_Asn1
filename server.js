import express from "express";
// import blogRouter from "../routes/BlogRouter.js"
import DB from "./config/db.js"
import * as dotenv from "dotenv";

dotenv.config({path: `.env.${process.env.NODE_ENV}`})

await DB.connectDB()
const app = new express()
const PORT = process.env.APPLICATION_PORT || 3000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})