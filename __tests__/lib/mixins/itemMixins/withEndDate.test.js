import {withEndDate} from '../../../../src/js/lib/mixins/itemMixins/withEndDate.js';

describe('withEndDate()', () => {
  test('Should return an Object', () => {
    const endDate = withEndDate()({});
    expect(typeof endDate).toBe('object');
  });

  test('Should set and get the endDate appropriately', () => {
    const endDate = withEndDate()({});

    expect(endDate.getEndDate()).toBe(null);

    const newEndDate = new Date();
    endDate.setEndDate(newEndDate);

    expect(endDate.getEndDate()).toBe(newEndDate);
  });
});
