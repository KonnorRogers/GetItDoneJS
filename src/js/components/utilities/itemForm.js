import {Base} from './base.js';
import {addToArray} from '../../utils/arrayUtils.js';

export const ItemForm = (props = {}, fields = []) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();
  let _fields = fields;

  const getBase = () => {
    return _base;
  };

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

  const renderField = obj => {
    const tag = obj.tag || 'input';
    obj.className = 'item-form-field';
    obj.placeholder = obj.name;
    const element = _base.dom().createElement(tag, obj);

    return element;
  };

  const renderTitle = () => {
    const name = 'title';

    return renderField({name});
  };
  const renderDescription = () => {
    const name = 'description';
    const tag = 'textarea';
    const rows = '8';

    return renderField({name, tag, rows});
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

  const renderButton = () => {
    const innerText = 'Add project';
    const className = 'add-project-btn hide';

    const element = _base.dom().createElement('button', {innerText, className});

    const formId = _baseProps.id;

    _base
      .dom()
      .addInputListener(element, () =>
        document.querySelector(`#${formId}`).classList.add('show'),
      );

    return element;
  };

  setDefaultFields();

  const render = () => {
    const type = _baseProps.element || 'form';
    _base.setProps({onsubmit: e => console.log(e)});
    // _base.setProps({className: 'item-form hide'});
    const element = new DocumentFragment();

    const form = _base.dom().createElement(type, _baseProps);

    _base.dom().appendChildrenTo(form)(_fields);
    _base.dom().appendChildrenTo(element)(renderButton(), form);
    return element;
  };

  return {
    setFields,
    getBase,
    render,
  };
};
