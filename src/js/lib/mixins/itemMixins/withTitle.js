/**
 * Mixin for using title. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {string} [title=''] - The title of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withTitle to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withTitle} from '<path>/<to>/withTitle.js';
 *
 * // with pipe()
 * const obj = pipe(withTitle)({});
 * obj.getTitle(); // => ''
 *
 * // As a standalone
 * const newObj = withTitle()({});
 * newObj.setTitle('new title');
 * newObj.getTitle(); // => 'new title'
 */
export const withTitle = (title = '') => obj => {
  let _title = title;
  const getTitle = () => _title;
  const setTitle = newTitle => (_title = newTitle);

  return {
    ...obj,
    getTitle,
    setTitle,
  };
};
