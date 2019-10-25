import DomManipulator from '../utils/domManipulator.js';

export const Checkbox = (props = {}) => {
  const render = () => {
    props.type = props.type || 'radio';
    domManipulator.createElement('button', props);
  };

  return {render};
};
