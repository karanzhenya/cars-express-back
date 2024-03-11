import {Router} from 'express';
import CarsController from "../Cars/CarsController.js";
import CarsSpecsController from "../CarSpecs/CarsSpecsController.js";
import UpdatedCarsContorller from "../UpdatedCars/UpdatedCarsContorller.js";

const caliperRouter = new Router()

caliperRouter.get('/cars', CarsController.getCars)
caliperRouter.get('/cars/:id', CarsController.getOneCar)
caliperRouter.post('/cars', CarsController.createCar)
caliperRouter.get('/cars/:id/specs', CarsSpecsController.getCarSpecs)
caliperRouter.get(`/carspecs/search`, CarsSpecsController.getSearchedModelType)
caliperRouter.post('/carspecs', CarsSpecsController.addCarSpecs)
caliperRouter.post('/carspecslist', CarsSpecsController.addCarSpecsList)
caliperRouter.put('/update/:id', CarsSpecsController.updateCarSpecs)
caliperRouter.get('/car/search', CarsController.getOneCarByName)
caliperRouter.get('/updated/cars', UpdatedCarsContorller.getUpdatedCars)
caliperRouter.post('/updated/cars', UpdatedCarsContorller.createNewUpdatedCar)

export default caliperRouter;