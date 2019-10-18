/**
 * Dom manipulations IE: rendering the page, creating elements, etc
 */
export default (function DomManipulator() {
  /**
   * Creates an element with the given properties
   * @param {Object} props - Properties of the element you're creating. Properties
   *    should be valid HTML properties for the given {props.type} of the element created
   * @param {string} props.type - What kind of element to create. IE: 'div'. Under the hood
   *    it will run `document.createElement(`${props.type}`);`
   * @return {HTMLElement} - Returns an HTMLelement as defined by props.type
   */
  const createElement = (props = {}) => {
    const object = Object.assign({}, props);

    // If no type is defined, return null
    if (!props.type) {
      return null;
    }

    const element = document.createElement(`${object.type}`);

    // Assigns properties of the created object onto the given element
    Object.assign(element, object);

    return element;
  };

  return {
    createElement,
  };
})();
