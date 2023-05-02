import CarsService from "./CarsService.js";


class CarsController {

    async getCars(req, res) {
        try {
            const cars = await CarsService.getCars()
             res.status(200).json(cars)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneCar(req, res) {
        try {
            const oneCar = await CarsService.getOneCar(req.params.id)
             res.status(200).json(oneCar)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async createCar(req, res) {
        try {
            const newCar = await CarsService.createCar(req.body)
            res.status(200).json(newCar)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CarsController();