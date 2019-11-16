import {Base} from './base.js';

export default function addItemForm(props = {}) {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const render = () => {
    const type = _baseProps.element || 'form';
    const element = _base.dom().createElement(type, _baseProps);
  };
  return {
    render,
  };
}
