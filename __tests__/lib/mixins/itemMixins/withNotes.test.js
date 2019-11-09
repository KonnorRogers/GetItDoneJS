import {withNotes} from '../../../../src/js/lib/mixins/itemMixins/withNotes.js';

describe('withNotes()', () => {
  test('Should return a note object', () => {
    const noteObj = withNotes()({});

    expect(typeof noteObj).toBe('object');
  });

  test('Should modify note with an array', () => {
    const noteObj = withNotes()({});

    const notes = ['note1', 'note2'];

    noteObj.addNotes(notes);

    expect(noteObj.getNotes()).toStrictEqual(notes);
  });

  test('Should modify notes array with multiple notes', () => {
    const noteObj = withNotes()({});

    const note1 = 'note1';
    const note2 = 'note2';
    const note3 = 'note3';

    const notes = [note1, note2, note3];

    noteObj.addNotes(note1, note2, note3);

    expect(noteObj.getNotes()).toStrictEqual(notes);

    noteObj.addNotes(notes);

    expect(noteObj.getNotes()).toStrictEqual(notes.concat(notes));
  });
});
