import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

export const INVALID_MONGO_ID = 'Invalid mongo id';
export const CAR_NOT_FOUND = 'Car not found';
export const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

export const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutput: Car = new Car(
  {
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
);

export const inputArrayCars = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const HORNET_NAME = 'Honda Cb 600f Hornet';

export const motorcycleInput: IMotorcycle = {
  model: HORNET_NAME,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleOutput: Motorcycle = new Motorcycle(
  {
    id: '6348513f34c397abcad040b2',
    model: HORNET_NAME,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
);

export const inputArrayMotorcycles = [
  {
    id: '634852326b35b59438fbea2f',
    model: HORNET_NAME,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const CARS_PATH = '/cars';
export const CARS_ID_PATH = '/cars/:id';

export const MOTORCYCLES_PATH = '/motorcycles';
export const MOTORCYCLES_ID_PATH = '/motorcycles/:id';