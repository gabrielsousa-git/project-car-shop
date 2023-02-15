import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import ErrorHandler from '../Utils/ErrorHandler';
import { INVALID_MONGO_ID } from '../Utils/Variables';

export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new ErrorHandler(422, INVALID_MONGO_ID);
    return this.model.findById({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new ErrorHandler(422, INVALID_MONGO_ID);

    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise< T | null> {
    if (!isValidObjectId(_id)) throw new ErrorHandler(422, INVALID_MONGO_ID);

    return this.model.findByIdAndDelete({ _id });
  }
}