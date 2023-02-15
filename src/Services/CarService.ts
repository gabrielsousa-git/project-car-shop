import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorHandler from '../Utils/ErrorHandler';
import { CAR_NOT_FOUND } from '../Utils/Variables';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async find() {
    const carODM = new CarODM();
    const cars = await carODM.find();

    const carsArray = cars.map((car) => this.createCarDomain(car));

    return carsArray;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);

    if (!car) throw new ErrorHandler(404, CAR_NOT_FOUND);

    return this.createCarDomain(car);
  }

  public async updateCar(id: string, car: Partial<ICar>) {
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);

    if (!updatedCar) throw new ErrorHandler(404, CAR_NOT_FOUND);

    return this.createCarDomain(updatedCar);
  }

  public async deleteCar(id: string) {
    const carODM = new CarODM();
    const car = await carODM.delete(id);

    if (!car) throw new ErrorHandler(404, CAR_NOT_FOUND);
  }
}