import {addToArray} from '../../utils/addToArray.js';

export const withNotes = (notes = []) => obj => {
  let _notes = notes;

  const getNotes = () => _notes;

  const addNote = (...newNotes) => {
    _notes = addToArray(_notes, newNotes.flat());
    return _notes;
  };

  return {
    ...obj,
    getNotes,
    addNote,
  };
};
