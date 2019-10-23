import {withDescription} from '../../../src/js/mixins/itemMixins/withDescription.js';

describe('withDescription()', () => {
  test('Should return an Object', () => {
    const description = withDescription()({});
    expect(typeof description).toBe('object');
  });

  test('Should set and get the description appropriately', () => {
    const description = withDescription()({});

    expect(description.getDescription()).toBe('');

    const newDescription = 'My test description';
    description.setDescription(newDescription);

    expect(description.getDescription()).toBe(newDescription);
  });
});
