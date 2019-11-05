import DomManipulator from '../utils/domManipulator.js';
import {Base} from './base.comp.js';

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

    _base.setProps({element, className, href, onclick, onblur});
  };

  const renderButton = props => {
    const button = DomManipulator.createElement(props.element, props);
    return button;
  };

  /**
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

    const link = DomManipulator.createElement(_baseProps.element, _baseProps);

    // Remove the innerText from the link
    link.innerText = '';

    const button = renderButton({
      element: 'button',
      innerText: _baseProps.innerText,
    });

    link.appendChild(button);

    return link;
  };

  return {render};
};
