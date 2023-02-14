import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testando a camada Services da aplicação', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Testando o arquivo MotorcycleService', function () {
    const hornet = 'Honda Cb 600f Hornet';
    it('Deveria criar uma MOTOCICLETA com SUCESSO', async function () {
      const motorcycleInput: IMotorcycle = {
        model: hornet,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };

      const motorcycleOutput: Motorcycle = new Motorcycle(
        {
          id: '6348513f34c397abcad040b2',
          model: hornet,
          year: 2005,
          color: 'Yellow',
          status: true,
          buyValue: 30.000,
          category: 'Street',
          engineCapacity: 600,
        },
      );

      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.create(motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);
    });

    it('Deveria listar TODAS as MOTOCICLETAS', async function () {
      const inputArray = [
        {
          id: '634852326b35b59438fbea2f',
          model: hornet,
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

      const motorcyclesOutput = inputArray
        .map((
          { id, model, year, color, status, buyValue, category, engineCapacity },
        ) => new Motorcycle(
          {
            id,
            model,
            year,
            color,
            status,
            buyValue,
            category,
            engineCapacity,
          },
        ));

      sinon.stub(Model, 'find').resolves(motorcyclesOutput);

      const service = new MotorcycleService();
      const result = await service.find();

      expect(result).to.be.deep.equal(motorcyclesOutput);
    });

    it('Deveria listar a MOTOCICLETA que corresponde ao ID passado', async function () {
      const motorcycleOutput: Motorcycle = new Motorcycle(
        {
          id: '6348513f34c397abcad040b2',
          model: hornet,
          year: 2005,
          color: 'Yellow',
          status: true,
          buyValue: 30.000,
          category: 'Street',
          engineCapacity: 600,
        },
      );

      sinon.stub(Model, 'findById').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.findById('6348513f34c397abcad040b2');

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });
});