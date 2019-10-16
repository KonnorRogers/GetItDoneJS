/**
 * Dom manipulations IE: rendering the page, creating elements, etc
 */
export default (function DomManipulator() {
  /**
   * Create an element with the given properties
   * @param props {Object} Must define a type property otherwise it will return
   *    null
   * @return {HTMLElement} Returns an HTMLelement as defined by props.type
   */
  const createElement = (props = {}) => {
    const object = Object.assign({}, props);

    // If no type is defined, return null
    if (!props.type) {
      return null;
    }

    const element = document.createElement(`${object.type}`);

    // Assigns properties to the element
    // IE: props.onclick = () => function
    // Will then be applied to the element
    for (const [key, value] of Object.entries(object)) {
      element[`${key}`] = value;
    }

    return element;
  };

  return {
    createElement,
  };
})();
