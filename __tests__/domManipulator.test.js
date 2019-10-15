import DomManipulator from './src/js/domManipulator.js';

test('Should render an element with an ID of test', () => {
  const props = {};
  props.id = 'test';
  const element = DomManipulator.renderElement(props);

  expect(element.id).toBe('test');
});
