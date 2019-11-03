import DomManipulator from '../utils/domManipulator.js';
import {Base} from './base.comp.js';

export const Checkbox = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const render = () => {
    const type = _baseProps.type || 'radio';
    const className = _baseProps.className || 'checkbox';
    const element = _baseProps.element || 'button';

    _base.setProps({type, className, element});

    return DomManipulator.createElement(_baseProps.element, _baseProps);
  };

  return {render};
};
