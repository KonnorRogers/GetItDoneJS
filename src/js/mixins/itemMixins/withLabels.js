/**
 * This provides utility functions for labels.
 * @param {Object} [props = {}] - Properties to read from
 * @param {string[]} [props.labels = []]  - Label(s) to add to an object. Should be an {Array} of {strings}
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @category Mixins/ItemMixins
 * @module
 */
export const withLabels = ({labels = []} = {}) => obj => {
  const getLabels = () => labels;
  const addLabels = (...newLabels) =>
    newLabels.flat().map(label => labels.push(label));

  return {
    ...obj,
    addLabels,
    getLabels,
  };
};
