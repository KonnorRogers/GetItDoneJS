export const withNotes = ({notes = []}) => obj => {
  const getNotes = () => notes;
  const addNote = note => notes.push(note);
  return {
    ...obj,
    getNotes,
    addNote,
  };
};
