import DomManipulator from '../utils/domManipulator.js';

export const TaskTab = (props = {}) => {
  const render = () => {
    props.id = props.id || 'task-tab';
    props.className = props.className || 'tab';
    return domManipulator.createElement('button', props);
  };

  return {render};
};
