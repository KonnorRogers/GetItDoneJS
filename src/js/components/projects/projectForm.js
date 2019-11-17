import {ItemForm} from '../utilities/itemForm.js';

export const ProjectForm = (props = {}) => {
  props.className = props.className || 'item-form show';
  props.id = props.id || 'project-form';

  const _itemForm = ItemForm(props);

  const renderSubmit = () => {
    const tag = 'input';
    const type = 'submit';
    const value = 'Create project';
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
