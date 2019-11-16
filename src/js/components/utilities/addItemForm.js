import {Base} from './base.js';
import {addToArray} from '../../utils/arrayUtils.js';

export const addItemForm = (props = {}, fields = []) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();
  const _fields = fields;

  const getFields = () => _fields;

  const setFields = (...newFields) => {
    addToArray(_fields)(newFields);
  };

  const defaultFields = () => {
    // String
    let title;
    let description;

    // Boolean
    let finished;

    // Number
    let priority;

    // Array<String>
    let labels;
    let notes;

    // Date
    let startDate;
    let endDate;
  };

  const render = () => {
    const type = _baseProps.element || 'form';
    const element = _base.dom().createElement(type, _baseProps);

    _base.dom().appendChildren(element)(_fields);
    return element;
  };
  return {
    render,
  };
};
