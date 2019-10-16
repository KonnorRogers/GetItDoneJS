import DomManipulator from '../src/js/domManipulator.js';

describe('DomManipulator()', () => {
  describe('createElement()', () => {
    test('Should render an element with an ID of test', () => {
      const props = {};
      props.type = 'div';
      props.id = 'test';
      const element = DomManipulator.createElement(props);

      expect(element).not.toBeNull();
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.id).toBe('test');
    });

    test('Should apply nonvalid element fields', () => {
      const props = {};
      props.type = 'p';
      props.invalidField = 'invalid';
      const element = DomManipulator.createElement(props);
      expect(element).not.toBeNull();
      expect(element.invalidField).toBe('invalid');
    });

    test('Should return null if given no values', () => {
      const element = DomManipulator.createElement();
      expect(element).toBeNull();
    });

    test('Should apply valid html values if assigned after create', () => {
      const element = DomManipulator.createElement({type: 'p'});
      element.id = 'new ID';
      expect(element.id).toBe('new ID');
    });
  });
});
