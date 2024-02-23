import mongoose from "mongoose";


class DB {
    connectDB = async () => {
        await mongoose
            .connect(process.env.DB_URL)
            .then(() => console.log("Connected to DB"))
            .catch(err => console.error("000 -- "+err))
    }
}

export default new DB()