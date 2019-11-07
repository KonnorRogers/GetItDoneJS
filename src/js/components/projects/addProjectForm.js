import {Base} from '../utilities/base.js';

export const projectForm = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const onclick = () => {};

  const render = () => {
    const form = _base.dom().createElement(_baseProps.element, _baseProps);
    return form;
  };

  return {
    render,
  };
};
