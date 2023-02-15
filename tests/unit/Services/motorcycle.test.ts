import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  inputArrayMotorcycles,
  motorcycleInput,
  motorcycleOutput } from '../../../src/Utils/Variables';

describe('Testando a camada Services da aplicação', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Testando o arquivo MotorcycleService', function () {
    it('Deveria criar uma MOTOCICLETA com SUCESSO', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.create(motorcycleInput);

      expect(result).to.be.deep.equal(motorcycleOutput);
    });

    it('Deveria listar TODAS as MOTOCICLETAS', async function () {
      const motorcyclesOutput = inputArrayMotorcycles
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
      sinon.stub(Model, 'findById').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.findById('6348513f34c397abcad040b2');

      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });
});