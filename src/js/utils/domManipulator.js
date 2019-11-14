/**
 * Dom manipulations IE: rendering the page, creating elements, etc
 * @example
 * import DomManipulator from '<path>/<to>/domManipulator.js';
 */
export default (function DomManipulator() {
  // Creates an  element given certain parameters
  const createElement = (element, props = {}) => {
    if (!element) {
      return null;
    }

    const HTMLElement = document.createElement(element);

    // Assigns properties of the created object onto the given element
    Object.assign(HTMLElement, props);

    return HTMLElement;
  };
  /**
   * This is a curried function. The first item passed in is the parent. If no
   * Second function passed in, it will return a function which will accept children.
   *
   * @param {HTMLElement} parent - HTMLElement to append to
   * @return {(...children: HTMLElement|HTMLElement[]) => HTMLElement - Returns the parent passed in
   */
  const appendChildrenTo = parent => (...children) => {
    children.flat().forEach(child => parent.appendChild(child));
    return parent;
  };

  const setTarget = (ary, defaultTarget) => {
    // Remove previous targets
    document
      .querySelectorAll('.target')
      .forEach(e => e.classList.remove('target'));

    if (ary.includes(location.hash)) {
      return document.querySelector(location.hash).classList.add('target');
    }

    // default target
    document.querySelector(defaultTarget).classList.add('target');
  };

  const targetObserver = (element, callback) => {
    const config = {attributes: true, childList: true, subtree: true};

    // Callback function to execute when mutations are observed
    const mutationCallback = function(mutationsList, _observer) {
      for (let mutation of mutationsList) {
        callback();
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(mutationCallback);

    // Start observing the target node for configured mutations
    observer.observe(element, config);
  };

  const hideElement = element => {
    element.classList.add('hide');
    element.classList.remove('show');
  };

  const showElement = element => {
    element.classList.add('show');
    element.classList.remove('hide');
  };

  return {
    createElement,
    appendChildrenTo,
    setTarget,
    targetObserver,
    hideElement,
    showElement,
  };
})();
