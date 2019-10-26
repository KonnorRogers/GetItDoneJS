import DomManipulator from '../utils/domManipulator.js';

export const Tab = (props = {}) => {
  const render = () => {
    props.className = props.className || 'tab';
    props.element = props.element || 'button';
    return DomManipulator.createElement(props.element, props);
  };

  return {render};
};
