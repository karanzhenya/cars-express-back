import Car from "./Car.js";

class CarsService {
    async getCars() {
        const cars = await Car.find()
        return cars
    }

    async getOneCar(id) {
        const oneCar = await Car.findById(id)
        return oneCar
    }

    async createCar(newCar) {
        if (!newCar) {
            throw new Error('new car missed!')
        }
        const createdCar = await Car.create(newCar)
        return createdCar
    }
}

export default new CarsService();