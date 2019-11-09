import ItemMixin from '../../../src/js/lib/mixins/itemMixin.js';

describe('ItemMixin()', () => {
  test('Should create a default item mixin', () => {
    const item = ItemMixin()({});

    expect(item.getDescription()).toBe('');
  });

  test('Should change the value of finished to false', () => {
    const props = {finished: true};
    const item = ItemMixin(props)({});

    expect(item.isFinished()).toBe(true);
  });
});
