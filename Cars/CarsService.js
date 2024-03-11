import Car from "./Car.js";
import CarSpecs from "../CarSpecs/CarSpecs.js";

class CarsService {
    async getCars() {
        const cars = await Car.find()
        return cars
    }

    async getOneCar(id) {
        const oneCar = await Car.findById(id)
        return oneCar
    }

    async getOneCarByName(name) {
        if (!name) {
            throw new Error('Check car name!')
        }
        const regex = new RegExp(name, 'i');
        const searchedCar = await Car.find({name: regex})
        return searchedCar
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