import {Router} from 'express';
import CarsController from "../Cars/CarsController.js";
import CarsSpecsController from "../CarSpecs/CarsSpecsController.js";

const caliperRouter = new Router()

caliperRouter.get('/cars', CarsController.getCars)
caliperRouter.get('/cars/:id', CarsController.getOneCar)
caliperRouter.post('/cars', CarsController.createCar)
caliperRouter.get('/cars/:id/specs', CarsSpecsController.getCarSpecs)
caliperRouter.get(`/carspecs/search`, CarsSpecsController.getSearchedModelType)
caliperRouter.post('/carspecs', CarsSpecsController.addCarSpecs)
caliperRouter.put('/update/:id', CarsSpecsController.updateCarSpecs)

export default caliperRouter;