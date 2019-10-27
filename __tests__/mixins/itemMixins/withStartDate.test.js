import {withStartDate} from '../../../src/js/mixins/itemMixins/withStartDate.js';
describe('withStartDate()', () => {
  test('Should create a start date object', () => {
    const startDateObj = withStartDate()({});

    expect(typeof startDateObj).toBe('object');
  });

  test('Should update the startDate if a valid date is passed', () => {
    const startDateObj = withStartDate()({});

    const newDate = new Date();
    startDateObj.setStartDate(newDate);
    expect(startDateObj.getStartDate()).toBe(newDate);
  });

  test('Should not update startDate if not given a valid date', () => {});
});
