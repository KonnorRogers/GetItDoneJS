/**
 * This provides utility functions for endDates.
 * @param {Object} [props={}] - The properties to pull from
 * @param {Date} [props.endDate=null] - endDate to add to an object. Dates are Date objects.
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @category Mixins/ItemMixins
 * @module
 * @example
 * import {withEndDate} from '<path>/<to>/withEndDate.js';
 * const myEndDate = withEndDate({endDate: new Date()})({});
 * myEndDate.getEndDate();
 * // => {Date}
 *
 * const newEndDate = withEndDate()({})
 * newDesc.getEndDate();
 * // => null
 *
 */
export const withEndDate = ({endDate = null} = {}) => obj => {
  /**
   * @return {Date|null} Should return a date, but could technically be set to anything
   */
  const getEndDate = () => endDate;
  /**
   * @param {Date} newEndDate - What to set the endDate property to
   */
  const setEndDate = newEndDate => (endDate = newEndDate);

  return {
    ...obj,
    getEndDate,
    setEndDate,
  };
};
