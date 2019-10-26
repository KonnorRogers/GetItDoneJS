import {withNotes} from '../../../src/js/mixins/itemMixins/withNotes.js';

describe('withNotes()', () => {
  test('Should add notes from array, literal, or objects', () => {
    const notesObj = withNotes()({});
  });
});
