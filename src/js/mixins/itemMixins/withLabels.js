import {addToArray} from '../../utils/arrayUtils.js';

/**
 * Mixin for using labels. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {string|string[]} [labels=[]] - The labels of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withLabels to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withLabels} from '<path>/<to>/withLabels.js';
 *
 * // with pipe()
 * const obj = pipe(withLabels)({});
 * obj.getLabels(); // => []
 *
 * // As a standalone
 * const newObj = withLabels()({});
 * newObj.setLabels('label1', 'label2');
 * newObj.getLabels(); // => ['label1', 'label2']
 */
export const withLabels = (labels = []) => obj => {
  let _labels = labels;

  const getLabels = () => _labels;

  const addLabels = (...newLabels) => {
    _labels = addToArray(_labels)(newLabels.flat());
    return _labels;
  };

  return {
    ...obj,
    addLabels,
    getLabels,
  };
};
