import DomManipulator from '../utils/domManipulator.js';

/**
 * Base keeps track of a components properties. Can be extended to add additional functionality.
 * This is generally not meant to be used directly, but can be if needed
 *
 * @example
 * import {Base} from '<path>/<to>/base.comp.js';
 * const Component = (props = {}) => {
 *   const _base = Base(props);
 *
 *   const render = () => {
 *     _base.setProps({innerText: 'new text'});
 *     const props = _base.getProps();
 *     const element = document.createElement('div');
 *     element.innerText = props.innerText;
 *     return element;
 *   }
 *
 *   return { render };
 * }
 *
 * const myComponent = Component();
 * myComponent.render();
 * // => HTMLDivElement { ... innerText: 'new text', ...}
 */
export const Base = (props = {}) => {
  const _props = props;

  /**
   * Retreve an objects properties
   * @return {Object} - The object props variable
   */
  const getProps = () => _props;

  /**
   * This will mutate the original props variable of Base
   * @param {Object} newProps - Add additional properties to the current props object
   * @return {Object} Returns the appended version of properties.
   */
  const setProps = newProps => {
    Object.assign(_props, newProps);
    return _props;
  };

  /**
   * Base rendering for a component
   * @return {HTMLElement}
   */
  const render = () => {
    return DomManipulator.createElement(props.element, props);
  };

  return {
    getProps,
    setProps,
    render,
  };
};
