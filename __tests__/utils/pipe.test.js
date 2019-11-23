import {pipe} from '../../src/js/utils/pipe.js';

describe('pipe()', () => {
  test('Should append functions onto an object', () => {
    const testFuncString = 'test func';
    const testFunc = () => testFuncString;

    const testMixin = obj => {
      return {
        ...obj,
        testFunc,
      };
    };

    const obj = pipe(testMixin)({});

    expect(obj.testFunc()).toBe(testFuncString);
  });

  test('Should overwrite a function. Last one in wins', () => {
    const testFuncString = 'test func';

    const testMixin = obj => {
      return {
        ...obj,
        testFunc: () => testFuncString,
      };
    };

    const overwrittenFuncString = 'new string';
    const overwriteMixin = obj => {
      return {
        ...obj,
        testFunc: () => overwrittenFuncString,
      };
    };

    const obj = pipe(
      testMixin,
      overwriteMixin,
    )({});

    expect(obj.testFunc()).not.toBe(testFuncString);
    expect(obj.testFunc()).toBe(overwrittenFuncString);

    const newObj = pipe(
      overwriteMixin,
      testMixin,
    )({});
    expect(newObj.testFunc()).toBe(testFuncString);
    expect(newObj.testFunc()).not.toBe(overwrittenFuncString);
  });
});
