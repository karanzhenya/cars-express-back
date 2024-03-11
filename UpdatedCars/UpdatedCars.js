import mongoose from "mongoose";

const UpdatedCars = new mongoose.Schema({
    modelType: {type: String, require: true},
    info: {type: String, require: true},
    date: {type: String, require: true}
})

export default mongoose.model('UpdatedCars', UpdatedCars)