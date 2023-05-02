import mongoose from "mongoose";

const CarSpecs = new mongoose.Schema({
    modelType: {type: String, require: true},
    info: {type: String, require: true},
    _car_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Car'}
})

export default mongoose.model('CarSpecs', CarSpecs)