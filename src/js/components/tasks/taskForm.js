import {ItemForm} from '../utilities/itemForm.js';

export const TaskForm = (props = {}) => {
  props.className = 'item-form hide';

  const _itemForm = ItemForm(props);

  const onclick = () => {};

  const render = () => {
    return _itemForm.render();
  };

  return {
    render,
  };
};
