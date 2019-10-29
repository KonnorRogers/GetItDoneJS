/**
 * Mixin for using startDate. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {?Date} [startDate=null] - The startDate of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withStartDate to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withStartDate} from '<path>/<to>/withStartDate.js';
 *
 * // with pipe()
 * const obj = pipe(withStartDate)({});
 * obj.getStartDate(); // => null
 *
 * // As a standalone
 * const newObj = withStartDate()({});
 * newObj.setStartDate(new Date());
 * newObj.getStartDate(); // => 2019-10-29T08:07:13.649Z (todays date)
 */
export const withStartDate = (startDate = null) => obj => {
  const getStartDate = () => startDate;
  const setStartDate = newStartDate => (startDate = newStartDate);

  return {
    ...obj,
    getStartDate,
    setStartDate,
  };
};
