import mongoose from "mongoose";

const Car = new mongoose.Schema({
    name: {type: String, require: true}
})


export default mongoose.model('Car', Car)