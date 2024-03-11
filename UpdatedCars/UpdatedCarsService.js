import UpdatedCars from "./UpdatedCars.js";

class UpdatedCarsService {
    async getUpdatedCars() {
        const updatedCars = await UpdatedCars.find()
        return updatedCars
    }

    async addUpdatedCars(newUpdatedCar) {
        if (!newUpdatedCar) {
            throw new Error('new updated car missed!')
        }
        let fullUpdatedCar = {...newUpdatedCar, date: new Date()}
        const createdNewUpdatedCar = await UpdatedCars.create(fullUpdatedCar)
        return createdNewUpdatedCar
    }
}

export default new UpdatedCarsService();