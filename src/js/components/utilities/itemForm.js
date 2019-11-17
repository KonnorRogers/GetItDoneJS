import {Base} from './base.js';
import {addToArray} from '../../utils/arrayUtils.js';

export const ItemForm = (props = {}, fields = []) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();
  const _fields = fields;

  const getFields = () => _fields;

  const setFields = (...newFields) => {
    addToArray(_fields)(newFields.flat());
  };

  const setDefaultFields = () => {
    const ary = [
      renderTitle(),
      renderDescription(),
      renderPriority(),
      renderLabels(),
      renderNotes(),
      renderStartDate(),
      renderEndDate(),
      renderFinished(),
    ];

    setFields(ary);
  };

  const renderField = props => {
    const type = props.element || 'input';
    props.className = 'add-item-field';
    const element = _base.dom().createElement(type, props);

    return element;
  };

  const renderTitle = () => {
    const name = 'title';

    return renderField({name});
  };
  const renderDescription = () => {
    const name = 'description';

    return renderField({name});
  };
  const renderFinished = () => {
    const name = 'finished';

    return renderField({name});
  };
  const renderPriority = () => {
    const name = 'priority';

    return renderField({name});
  };
  const renderLabels = () => {
    const name = 'labels';

    return renderField({name});
  };
  const renderNotes = () => {
    const name = 'notes';

    return renderField({name});
  };
  const renderStartDate = () => {
    const name = 'start-date';

    return renderField({name});
  };
  const renderEndDate = () => {
    const name = 'end-date';

    return renderField({name});
  };

  const render = () => {
    const type = _baseProps.element || 'form';
    const element = _base.dom().createElement(type, _baseProps);

    setDefaultFields();

    console.log(_fields);
    console.log(element);
    _base.dom().appendChildrenTo(element)(_fields);
    return element;
  };

  return {
    render,
  };
};
