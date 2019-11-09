import {withPriority} from '../../../../src/js/lib/mixins/itemMixins/withPriority.js';

describe('withPriority()', () => {
  test('Should provide priority', () => {
    const priorityObj = withPriority()({});
    expect(typeof priorityObj).toBe('object');
  });

  test('Should return priority of 4', () => {
    const priorityObj = withPriority()({});

    expect(priorityObj.getPriority()).toBe(4);
  });

  test('Should change the value of priority with string or number', () => {
    const priorityObj = withPriority()({});

    priorityObj.setPriority(2);
    expect(priorityObj.getPriority()).toBe(2);

    priorityObj.setPriority('3');
    expect(priorityObj.getPriority()).toBe(3);
  });

  test('Should not change priority if anything besides 1-4 given', () => {
    const priorityObj = withPriority()({});

    priorityObj.setPriority(5);
    priorityObj.setPriority('0');
    expect(priorityObj.getPriority()).toBe(4);
  });

  test('Should not change priority if not given a string or number', () => {
    const priorityObj = withPriority()({});

    priorityObj.setPriority({});
    expect(priorityObj.getPriority()).toBe(4);
  });
});
