import {addToArray} from '../../utils/arrayUtils.js';

export const withLabels = (labels = []) => obj => {
  let _labels = labels;

  const getLabels = () => _labels;

  const addLabels = (...newLabels) => {
    _labels = addToArray(_labels, newLabels.flat());
    return _labels;
  };

  return {
    ...obj,
    addLabels,
    getLabels,
  };
};
