import {addToArray} from '../../utils/arrayUtils.js';

export const withNotes = (notes = []) => obj => {
  let _notes = notes;

  const getNotes = () => _notes;

  const addNotes = (...newNotes) => {
    _notes = addToArray(_notes, newNotes.flat());
    return _notes;
  };

  return {
    ...obj,
    getNotes,
    addNotes,
  };
};
