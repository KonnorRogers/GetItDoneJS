import {Base} from '../utilities/base.js';

export const addTaskForm = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const render = () => {
    const element = props.element || 'form';

    const form = _base.dom().createElement(element, _baseProps);

    const btnProps = {onclick, onkeydown};
    const addTaskBtn = () => {
      _base.dom().createElement('button');
    };

    return form;
  };

  return {render};
};
