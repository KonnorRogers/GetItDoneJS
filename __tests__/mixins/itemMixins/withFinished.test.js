import {withFinished} from '../../../src/js/mixins/itemMixins/withFinished.js';

describe('withFinished()', () => {
  test('Should return an Object', () => {
    const finishObj = withFinished()({});
    expect(typeof finishObj).toBe('object');
  });

  test('Should mark as finishObj and unfinished as appropriate', () => {
    const finishObj = withFinished()({});

    expect(finishObj.isFinished()).toBe(false);
    expect(finishObj.isIncomplete()).toBe(true);

    finishObj.finish();

    expect(finishObj.isIncomplete()).toBe(false);
    expect(finishObj.isFinished()).toBe(true);

    finishObj.markIncomplete();

    expect(finishObj.isIncomplete()).toBe(true);
    expect(finishObj.isFinished()).toBe(false);
  });
});
