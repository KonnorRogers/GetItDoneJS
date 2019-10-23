import {withLabels} from '../../../src/js/mixins/itemMixins/withLabels.js';

describe('withLabel()', () => {
  test('Should return a label object', () => {
    const labelObj = withLabels()({});

    expect(typeof labelObj).toBe('object');
  });

  test('Should modify label array', () => {
    const labelObj = withLabels()({});

    const labels = ['label1', 'label2'];

    labelObj.addLabels(labels);

    expect(labelObj.getLabels()).toStrictEqual(labels);
  });
});
