import {Base} from './base.js';
import {addToArray} from '../../utils/arrayUtils.js';
import {capitalizeString} from '../../utils/stringUtils.js';

export const ItemForm = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  let _fields = [];

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
      // renderFinished(),
    ];

    setFields(ary);
  };

  /**
   * Renders a given field. Base function for rendering other fields
   * @param {Object} obj - Pass in an object with properties, name required.
   * @return {HTMLElement} - Returns an html element
   */
  const renderFormField = (obj = {}) => {
    const tag = obj.tag || 'div';
    obj.className = 'item-form-field';

    const element = _base.dom().createElement(tag, obj);

    return element;
  };

  // const renderInputField = obj => {
  //   const name = obj.name;
  //   const tag = obj.tag || 'input';

  //   obj.className = obj.className || 'item-form-input';
  //   obj.placeholder = capitalizeString(name);

  //   const element = _base.dom().createElement(tag, obj);

  //   return element;
  // };

  const renderInputField = obj => {
    const name = obj.name;
    const tag = obj.tag || 'input';

    obj.className = obj.className || 'item-form-input';
    obj.placeholder = capitalizeString(name);

    const docFrag = new DocumentFragment();
    const input = _base.dom().createElement(tag, obj);
    const label = _base.dom().createElement('label', {for: obj.name});

    _base.dom().appendChildrenTo(docFrag)(label, input);
    return docFrag;
  };

  const renderTitle = () => {
    const formField = renderFormField();

    const name = 'title';
    const title = renderInputField({name});

    formField.appendChild(title);
    return formField;
  };
  const renderDescription = () => {
    const formField = renderFormField();

    const name = 'description';
    const tag = 'textarea';
    const rows = '4';

    const desc = renderInputField({name, tag, rows});

    formField.appendChild(desc);
    return formField;
  };

  // const renderFinished = () => {
  // const name = 'finished';
  // const type = 'radio';
  // const props = {
  //   type: 'radio',
  //   name: 'finished',
  //   innerText: 'Mark as completed',
  // };
  // return renderField(props);
  // const docFrag = new DocumentFragment();
  // const fieldset = _base.dom().createElement('fieldset');
  // const legend = _base.dom().createElement('legend', {innerText: ''});
  // const label = _base.dom().createElement('label', {innerText: });
  // };

  const renderRadioBtn = props => {
    props.tag = 'input';
    props.type = 'radio';

    const radiobtn = _base.dom().createElement(props.tag, props);

    return radiobtn;
  };

  const renderRadioBtnLabel = props => {
    props.tag = 'label';

    const label = _base.dom().createElement(props.tag, props);
    return label;
  };

  const renderPriority = () => {
    const name = 'priority';

    const docFrag = new DocumentFragment();
    const fieldset = renderFormField({tag: 'fieldset', name});

    const props = {
      name: 'priority',
      for: 'priority',
    };

    const btnsLength = 4;
    for (let i = 1; i <= btnsLength; i++) {
      const id = `priority-${i}`;

      const div = _base.dom().createElement('div', {className: 'radio-btn'});
      const radio = renderRadioBtn(Object.assign({value: i, id: id}, props));
      const label = renderRadioBtnLabel(
        Object.assign({innerText: `Priority ${i}`, id: id}, props),
      );

      if (i === 1) {
        radio.checked = true;
      }

      _base.dom().appendChildrenTo(div)(radio, label);
      _base.dom().appendChildrenTo(fieldset)(div);
    }

    docFrag.appendChild(fieldset);

    return docFrag;
  };

  const renderLabels = () => {
    const formField = renderFormField();

    const name = 'labels';
    const input = renderInputField({name});

    formField.appendChild(input);
    return formField;
  };
  const renderNotes = () => {
    const formField = renderFormField();

    const name = 'notes';
    const input = renderInputField({name});

    formField.appendChild(input);
    return formField;
  };
  const renderStartDate = () => {
    const formField = renderFormField();

    const name = 'start-date';
    const input = renderInputField({name});

    formField.appendChild(input);
    return formField;
  };
  const renderEndDate = () => {
    const formField = renderFormField();

    const name = 'end-date';
    const input = renderInputField({name});

    formField.appendChild(input);
    return formField;
  };

  const renderButton = () => {
    const innerText = `add ${_baseProps.item}`;
    const className = `add-${_baseProps.item}-btn hide`;

    const element = _base.dom().createElement('button', {innerText, className});

    const formId = _baseProps.id;

    _base.dom().addInputListener(element, () => {
      const form = document.querySelector(`#${formId}`);
      const background = document.querySelector('.item-form-background');

      _base.dom().showElement(form);
      _base.dom().showElement(background);
    });

    return element;
  };

  setDefaultFields();

  const render = () => {
    const type = _baseProps.element || 'form';
    _base.setProps({
      onsubmit: e => {
        e.preventDefault();
        // console.log(e);
      },
    });

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
    getFields,
  };
};
