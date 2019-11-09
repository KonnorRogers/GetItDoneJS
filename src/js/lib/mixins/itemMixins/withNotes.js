import {addToArray} from '../../../utils/arrayUtils.js';

/**
 * Mixin for using notes. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {string|string[]} [notes=[]] - The notes of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withNotes to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withNotes} from '<path>/<to>/withNotes.js';
 *
 * // with pipe()
 * const obj = pipe(withNotes)({});
 * obj.getNotes(); // => []
 *
 * // As a standalone
 * const newObj = withNotes()({});
 * newObj.setNotes('note1', 'note2');
 * newObj.getNotes(); // => ['note1', 'note2']
 */

export const withNotes = (notes = []) => obj => {
  let _notes = notes;

  const getNotes = () => _notes;

  const addNotes = (...newNotes) => {
    _notes = addToArray(_notes)(newNotes.flat());
    return _notes;
  };

  return {
    ...obj,
    getNotes,
    addNotes,
  };
};
