import DomManipulator from '../utils/domManipulator.js';

export const Board = (props = {}) => {
  const render = () => {
    props.id = props.id || 'board';

    return domManipulator.createElement('button', props);
  };

  return {render};
};
