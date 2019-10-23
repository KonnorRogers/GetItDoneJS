/**
 * This provides utility functions for notes.
 * @param {string[]} [[]] object.notes - Note(s) to add to an object. notes are strings
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @category Mixins/ItemMixins
 * @module
 */
export const withNotes = ({notes = []} = {}) => obj => {
  const getNotes = () => notes;
  const addNote = note => notes.push(note);
  return {
    ...obj,
    getNotes,
    addNote,
  };
};
