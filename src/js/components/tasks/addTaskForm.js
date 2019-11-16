import {ItemForm} from '../utilities/addItemForm.js';

export const addTaskForm = (props = {}) => {
  const _form = ItemForm(props);

  const createFields = () => {};
  const setFields = () => {
    ItemForm.setFields(createFields());
  };

  const render = () => {};

  return {render};
};
