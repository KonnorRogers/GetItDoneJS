import domManipulator from '../../src/js/utils/domManipulator.js';

describe('domManipulator()', () => {
  describe('createElement()', () => {
    test('Should render an element with an ID of test', () => {
      const props = {};
      props.id = 'test';
      const element = domManipulator.createElement('div', props);

      expect(element).not.toBeNull();
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.id).toBe('test');
    });

    test('Should apply nonvalid element fields', () => {
      const props = {};
      props.invalidField = 'invalid';
      const element = domManipulator.createElement('p', props);
      expect(element).not.toBeNull();
      expect(element.invalidField).toBe('invalid');
    });

    test('Should return null if given no values', () => {
      const element = domManipulator.createElement();
      expect(element).toBeNull();
    });

    test('Should apply valid html values if assigned after create', () => {
      const element = domManipulator.createElement('p');
      element.id = 'new ID';
      expect(element.id).toBe('new ID');
    });
  });

  describe('appendChildrenTo()', () => {
    test('Should append multiple children to a parent element', () => {
      const element = domManipulator.createElement('div');

      const children = {
        child1: {
          element: 'div',
          props: {
            id: 'child1',
          },
        },
        child2: {
          element: 'p',
          props: {
            id: 'child2',
          },
        },
        child3: {
          element: 'span',
          props: {
            id: 'child3',
          },
        },
      };

      const childrenAry = Object.entries(children).map((childAry, index) => {
        const child = childAry[1];

        const element = domManipulator.createElement(
          child.element,
          child.props,
        );

        return element;
      });

      domManipulator.appendChildrenTo(element)(childrenAry);
      expect(element.children.length).toBe(3);

      // Test that each child of the element corresponds to the array
      // created above
      childrenAry.forEach((child, index) => {
        expect(element.children[index]).toBe(child);
      });
    });
  });
});
