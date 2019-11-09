import {Base} from './base.js';

export const Tab = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const removeFocus = () => {
    const focusedItems = document.querySelectorAll('.focus');

    if (focusedItems.length > 0) {
      focusedItems.forEach(e => e.classList.remove('focus'));
    }
  };

  const addFocus = id => {
    document.getElementById(id).classList.add('focus');
  };

  const setDefaultProps = id => {
    const element = _baseProps.element || 'a';
    const className = _baseProps.className || 'tab';
    const href = `#${id}`;
    const onclick = () => {
      removeFocus();
      addFocus(id);
    };

    _base.setProps({href, element, className, onclick});
  };

  /**
   * Every tab must be created with an ID. Without an id, it will just
   * return null
   *
   * @param {string} id - The id of the tab. The id must be supplied or it will error.
   * The id is used to link to the tab.
   * @return {HTMLElement} Returns an HTMLElement, defaults to an <a> tag w/ a nested <button>
   */
  const render = (id = _base.getProps().id) => {
    // id must be a string
    if (typeof id !== 'string') {
      return null;
    }

    // Set defaults for the elements properties
    setDefaultProps(id);

    const link = _base.dom().createElement(_baseProps.element, _baseProps);

    return link;
  };

  return {render};
};
