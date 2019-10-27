import DomManipulator from '../utils/domManipulator.js';

export const Board = (props = {}) => {
  const render = () => {
    props.id = props.id || 'board';
    props.element = props.element || 'div';

    return DomManipulator.createElement(props.element, props);
  };

  return {render};
};