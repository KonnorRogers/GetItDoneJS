import Board from '../src/js/board.js';

describe('Board()', () => {
  test('Should have a board with default values', () => {
    expect(Board().getTasks()).toStrictEqual([]);
  });
});
