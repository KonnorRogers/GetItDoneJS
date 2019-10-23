/**
 * This provides utility functions for endDates.
 * @param {Date} [null] object.endDate - endDate to add to an object. Dates are Date objects.
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @mixin
 */
export const withEndDate = ({endDate = null} = {}) => obj => {
  const getEndDate = () => endDate;
  const setEndDate = newEndDate => (endDate = newEndDate);

  return {
    ...obj,
    getEndDate,
    setEndDate,
  };
};
