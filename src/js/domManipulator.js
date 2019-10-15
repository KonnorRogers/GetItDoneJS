export default (function DomManipulator() {
  const renderElement = (props = {}) => {
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
    renderElement,
  };
})();
