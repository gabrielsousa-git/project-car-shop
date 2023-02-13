import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorHandler from '../Utils/ErrorHandler';

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

    if (!car) throw new ErrorHandler(404, 'Car not found');

    return this.createCarDomain(car);
  }
}