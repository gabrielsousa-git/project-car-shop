import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { carInput, carOutput, inputArrayCars } from '../../../src/Utils/Variables';

describe('Testando a camada Services da aplicação', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Testando o arquivo CarService', function () {
    it('Deveria criar um CARRO com SUCESSO', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarService();
      const result = await service.create(carInput);

      expect(result).to.be.deep.equal(carOutput);
    });

    it('Deveria listar TODOS os CARROS', async function () {
      const carsOutput = inputArrayCars
        .map(({ id, model, year, color, status, buyValue, doorsQty, seatsQty }) => new Car(
          {
            id,
            model,
            year,
            color,
            status,
            buyValue,
            doorsQty,
            seatsQty,
          },
        ));

      sinon.stub(Model, 'find').resolves(carsOutput);

      const service = new CarService();
      const result = await service.find();

      expect(result).to.be.deep.equal(carsOutput);
    });

    it('Deveria listar o CARRO que corresponde ao ID passado', async function () {
      sinon.stub(Model, 'findById').resolves(carOutput);

      const service = new CarService();
      const result = await service.findById('634852326b35b59438fbea2f');

      expect(result).to.be.deep.equal(carOutput);
    });
  });
});