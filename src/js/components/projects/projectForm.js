import {ItemForm} from '../utilities/itemForm.js';

export const ProjectForm = (props = {}) => {
  props.className = 'project-form hide';

  const _itemForm = ItemForm(props);

  const onclick = () => {};

  const render = () => {
    return _itemForm.render();
  };

  return {
    render,
  };
};
