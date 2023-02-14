import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testando a camada Services da aplicação', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Testando o arquivo CarService', function () {
    it('Deveria criar um CARRO com SUCESSO', async function () {
      const carInput: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carOutput: Car = new Car(
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

      sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarService();
      const result = await service.create(carInput);

      expect(result).to.be.deep.equal(carOutput);
    });

    it('Deveria listar TODOS os CARROS', async function () {
      const inputArray = [
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

      const carsOutput = inputArray
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
      const carOutput: Car = new Car(
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
      );

      sinon.stub(Model, 'findById').resolves(carOutput);

      const service = new CarService();
      const result = await service.findById('634852326b35b59438fbea2f');

      expect(result).to.be.deep.equal(carOutput);
    });
  });
});