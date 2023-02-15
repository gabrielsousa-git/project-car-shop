import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import { MOTORCYCLES_ID_PATH, MOTORCYCLES_PATH } from '../Utils/Variables';

const routes = Router();

routes.post(
  MOTORCYCLES_PATH,
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  MOTORCYCLES_PATH,
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);

routes.get(
  MOTORCYCLES_ID_PATH,
  (req, res, next) => new MotorcycleController(req, res, next).getMotorcycleById(),
);

routes.put(
  MOTORCYCLES_ID_PATH,
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycleById(),
);

routes.delete(
  MOTORCYCLES_ID_PATH,
  (req, res, next) => new MotorcycleController(req, res, next).deletMotorcycleById(),
);

export default routes;