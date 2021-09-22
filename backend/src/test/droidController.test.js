const { droidController } = require('../controllers/droidController.ts');
const mockedFirstRequest = require('./utils/mockedFirstRequest');
const mockedSecondRequest = require('./utils/mockedSecondRequest');

let req;
let res;

describe('Given a droidController function', () => {
  describe('When is invoked', () => {
    describe('And it resolves with the mockedFirstRequest', () => {
      test('Then res.json should be called with coordinates', async () => {
        req = { body: mockedFirstRequest };
        res = {
          json: jest.fn(),
          send: jest.fn(),
          status: jest.fn()
        };

        await droidController(req, res);

        expect(res.json).toHaveBeenCalledWith({
          x: 0,
          y: 90
        });
      });
    });
    describe('And it resolves with the mockedSecondRequest', () => {
      test('Then res.json should be called with coordinates', async () => {
        req = { body: mockedSecondRequest };
        res = {
          json: jest.fn(),
          send: jest.fn(),
          status: jest.fn()
        };

        await droidController(req, res);

        expect(res.json).toHaveBeenCalledWith({ x: 3, y: 11 });
      });
    });
  });
});
