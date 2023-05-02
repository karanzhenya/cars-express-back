import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import caliperRouter from "./routers/caliper-router.js";

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(caliperRouter);
dotenv.config()
mongoose.set("strictQuery", false);

(async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(process.env.PORT || 5000, () => {
            console.log(`server start in ${process.env.PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
})()
