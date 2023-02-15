import { Router } from 'express';
import CarController from '../Controllers/CarController';
import { CARS_ID_PATH, CARS_PATH } from '../Utils/Variables';

const routes = Router();

routes.post(
  CARS_PATH,
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  CARS_PATH,
  (req, res, next) => new CarController(req, res, next).getAllCars(),
);

routes.get(
  CARS_ID_PATH,
  (req, res, next) => new CarController(req, res, next).getCarById(),
);

routes.put(
  CARS_ID_PATH,
  (req, res, next) => new CarController(req, res, next).updateCarById(),
);

routes.delete(
  CARS_ID_PATH,
  (req, res, next) => new CarController(req, res, next).deletCarById(),
);

export default routes;