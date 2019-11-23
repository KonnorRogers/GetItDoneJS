import {withLabels} from '../../../../src/js/lib/mixins/itemMixins/withLabels.js';

describe('withLabel()', () => {
  test('Should return a label object', () => {
    const labelObj = withLabels()({});

    expect(typeof labelObj).toBe('object');
  });

  test('Should modify label with an array', () => {
    const labelObj = withLabels()({});

    const labels = ['label1', 'label2'];

    labelObj.addLabels(labels);

    expect(labelObj.getLabels()).toStrictEqual(labels);
  });

  test('Should modify labels array with multiple labels', () => {
    const labelObj = withLabels()({});

    const label1 = 'label1';
    const label2 = 'label2';
    const label3 = 'label3';

    const labels = [label1, label2, label3];

    labelObj.addLabels(label1, label2, label3);

    expect(labelObj.getLabels()).toStrictEqual(labels);

    labelObj.addLabels(labels);

    expect(labelObj.getLabels()).toStrictEqual(labels.concat(labels));
  });
});
