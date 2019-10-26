import DomManipulator from '../utils/domManipulator.js';

export const Checkbox = () => {
  const render = (props = {}) => {
    props = {
      type: 'radio',
      className: 'checkbox',
    };
    document.createElement('button', props);
  };

  return {render};
};
