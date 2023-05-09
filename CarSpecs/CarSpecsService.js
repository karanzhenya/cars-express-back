import CarSpecs from "./CarSpecs.js";

class CarSpecsService {
    async getCarSpecs(id) {
        if (!id) {
            throw new Error('id missed!')
        }
        const carSpecs = await CarSpecs.find({_car_id: id})
        return carSpecs
    }

    async getSearchedModelType(modelType) {
        if (!modelType) {
            throw new Error('modelType missed!')
        }
        const regex = new RegExp(modelType, 'i');
        const searchedModelType = await CarSpecs.find({modelType: regex})
        return searchedModelType
    }

    async addCarSpecs(newCarSpecs) {
        if (!newCarSpecs) {
            throw new Error('new CarSpecs missed!')
        }
        const createdCarSpecs = await CarSpecs.create(newCarSpecs)
        return createdCarSpecs
    }

    async updateCarSpecs(id, updatedData) {
        if (!id) {
            throw new Error('id missed!')
        }
        if (!updatedData) {
            throw new Error('updated data missed!')
        }
        const updatedCarSpecs = await CarSpecs.findByIdAndUpdate(id, updatedData, {new: true})
        return updatedCarSpecs
    }
}

export default new CarSpecsService();