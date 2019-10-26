import DomManipulator from '../utils/domManipulator.js';

export const Checkbox = (props = {}) => {
  const render = () => {
    props.type = props.type || 'radio';
    props.className = props.className || 'checkbox';
    props.element = props.element || 'button';

    return DomManipulator.createElement(props.element, props);
  };

  return {render};
};
