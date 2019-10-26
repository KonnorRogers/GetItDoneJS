import DomManipulator from '../utils/domManipulator.js';

export const Container = (props = {}) => {
  const render = () => {
    props.className = props.className || 'container';
    props.element = props.element || 'div';

    return DomManipulator.createElement(props.element, props);
  };
  return {render};
};
