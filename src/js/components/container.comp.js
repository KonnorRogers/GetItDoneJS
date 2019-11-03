import DomManipulator from '../utils/domManipulator.js';
import {Base} from './base.comp.js';

export const Container = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const render = () => {
    const id = _baseProps.id || 'container';
    const element = _baseProps.element || 'div';

    _base.setProps({element, id});

    return DomManipulator.createElement(_baseProps.element, _baseProps);
  };
  return {render};
};
