/**
 * Mixin for using description. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {string} [description=''] - The description of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withDescription to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withDescription} from '<path>/<to>/withDescription.js';
 *
 * // with pipe()
 * const obj = pipe(withDescription)({});
 * obj.getDescription(); // => ''
 *
 * // As a standalone
 * const newObj = withDescription()({});
 * newObj.setDescription('new description');
 * newObj.getDescription(); // => 'new description'
 */
export const withDescription = (description = '') => obj => {
  let _description = description;

  const getDescription = () => _description;

  const setDescription = newDescription => (_description = newDescription);

  return {
    ...obj,
    getDescription,
    setDescription,
  };
};
