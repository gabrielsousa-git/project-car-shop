import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import ErrorHandler from '../Utils/ErrorHandler';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async find() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.find();

    const carsArray = motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));

    return carsArray;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);

    if (!motorcycle) throw new ErrorHandler(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateMotorcycle(id: string, motorcycle: Partial<IMotorcycle>) {
    const motorcycleODM = new MotorcycleODM();
    const updatedMotorcycle = await motorcycleODM.update(id, motorcycle);

    if (!updatedMotorcycle) throw new ErrorHandler(404, 'Motorcycle not found');

    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}