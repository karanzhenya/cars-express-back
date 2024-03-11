import UpdatedCarsService from "./UpdatedCarsService.js";


class UpdatedCarController {

    async getUpdatedCars(req, res) {
        try {
            const cars = await UpdatedCarsService.getUpdatedCars()
            res.status(200).json(cars)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async createNewUpdatedCar(req, res) {
        try {
            const newCar = await UpdatedCarsService.addUpdatedCars(req.body)
            res.status(200).json(newCar)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UpdatedCarController();