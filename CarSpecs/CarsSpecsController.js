import CarSpecsService from "./CarSpecsService.js";

class CarsSpecsController {
    async getCarSpecs(req, res) {
        try {
            const carSpecs = await CarSpecsService.getCarSpecs(req.params.id)
            return res.status(200).json(carSpecs)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async addCarSpecs(req, res) {
        try {
            const carSpecs = await CarSpecsService.addCarSpecs(req.body)
            return res.status(200).json(carSpecs)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getSearchedModelType(req, res) {
        try {
            const {modelType} = req.query
            const searchedModelType = await CarSpecsService.getSearchedModelType(modelType)
            return res.status(200).json(searchedModelType)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CarsSpecsController();