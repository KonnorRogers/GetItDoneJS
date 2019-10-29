/**
 * Mixin for using endDate. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {?Date} [endDate=null] - The endDate of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withEndDate to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withEndDate} from '<path>/<to>/withEndDate.js';
 *
 * // with pipe()
 * const obj = pipe(withEndDate)({});
 * obj.getEndDate(); // => null
 *
 * // As a standalone
 * const newObj = withEndDate()({});
 * newObj.setEndDate(new Date());
 * newObj.getEndDate(); // => 2019-10-29T08:07:13.649Z (todays date)
 */
export const withEndDate = (endDate = null) => obj => {
  let _endDate = endDate;

  const getEndDate = () => _endDate;
  const setEndDate = newEndDate => (_endDate = newEndDate);

  return {
    ...obj,
    getEndDate,
    setEndDate,
  };
};
