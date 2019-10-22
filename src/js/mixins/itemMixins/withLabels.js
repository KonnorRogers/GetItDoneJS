/**
 * This provides utility functions for labels.
 * @param {string[]} [[]] object.labels - Label(s) to add to an object. Labels are simply strings
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @mixin
 */
export const withLabels = ({labels = []}) => obj => {
  const getLabels = () => labels;
  const addLabels = (...newLabels) =>
    newLabels.flat().map(label => labels.push(label));

  return {
    ...obj,
    addLabels,
    getLabels,
  };
};
