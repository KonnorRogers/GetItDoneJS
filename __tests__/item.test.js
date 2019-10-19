import Item from '../src/js/item.js';

describe('Item()', () => {
  test('Should return a default object', () => {
    const defaults = {
      title: '',
      description: '',
      startDate: null,
      endDate: null,
      notes: [],
      labels: [],
      finished: false,
      priority: 0,
    };

    expect(typeof Item()).toBe('object');
    expect(Item()).toStrictEqual(defaults);
  });

  test('Should override default properties', () => {
    const newProps = {
      title: 'title',
      description: 'description',
    };

    const item = Item(newProps);

    expect(item.title).toBe(newProps.title);
    expect(item.description).toBe(newProps.description);
  });
});
