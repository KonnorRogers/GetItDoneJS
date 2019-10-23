/**
 * This provides utility functions for startDates.
 * @param {Date} [null] object.startDate - startDate to add to an object. Dates are Date objects.
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @module
 * @category Mixins/ItemMixins
 */
export const withStartDate = ({startDate = null} = {}) => obj => {
  const getStartDate = () => startDate;
  const setStartDate = newStartDate => (startDate = newStartDate);

  return {
    ...obj,
    getStartDate,
    setStartDate,
  };
};
