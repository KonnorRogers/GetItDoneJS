import {ItemForm} from '../utilities/itemForm.js';

export const TaskForm = (props = {}) => {
  props.className = props.className || 'item-form hide';
  props.id = props.id || 'task-form';

  const _itemForm = ItemForm(props);

  const renderSubmit = () => {
    const tag = 'input';
    const type = 'submit';
    const value = 'Create task';
    const className = 'item-form-submit';

    return _itemForm
      .getBase()
      .dom()
      .createElement(tag, {type, value, className});
  };

  const render = () => {
    _itemForm.setFields(renderSubmit());
    return _itemForm.render();
  };

  return {
    render,
  };
};
