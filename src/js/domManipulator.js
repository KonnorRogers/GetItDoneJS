export default (function DomManipulator() {
  const renderElement = (props = {}) => {
    const object = Object.assign({}, props);
    const element = document.createElement(`${object.type}`);

    // Assigns properties to the element
    // IE: props.onclick = () => function
    // Will then be applied to the element
    for (const [key, element] of Object.entries(object)) {
      element[`${key}`] = element;
    }

    return element;
  };

  return {
    renderElement,
  };
})();
