import DomManipulator from '../utils/domManipulator.js';
import {Base} from './base.comp.js';

export const projectForm = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const onclick = () => {};

  const render = () => {
    const form = DomManipulator.createElement(_baseProps.element, _baseProps);
    return form;
  };

  return {
    render,
  };
};
