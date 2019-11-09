import {Base} from '../utilities/base.js';

export const taskList = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const setDefaultProps = () => {
    const element = _baseProps.element || 'div';
    const className = _baseProps.className || 'item-list';

    _base.setProps({element, className});
  };

  const render = () => {
    setDefaultProps();
    const element = _base.dom().createElement(_baseProps.element, _baseProps);
    return element;
  };

  return {render};
};
