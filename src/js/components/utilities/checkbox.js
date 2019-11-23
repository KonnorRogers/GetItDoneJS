import {Base} from './base.js';

export const Checkbox = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const render = () => {
    const type = _baseProps.type || 'radio';
    const className = _baseProps.className || 'checkbox';
    const element = _baseProps.element || 'button';

    _base.setProps({type, className, element});

    return _base.dom().createElement(_baseProps.element, _baseProps);
  };

  return {render};
};
