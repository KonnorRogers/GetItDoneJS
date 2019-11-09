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

  const setFocusId = (doc, url = null) => {
    doc = doc || document;
    url = url || document.URL;

    let focusId = url.split('#')[1];

    if (!focusId) {
      focusId = 'tasks';
    }

    return focusId;
  };

  const setFocusElement = (doc, state, url = null) => {
    doc = doc || document;
    url = url || document.URL;

    const focusId = setFocusId(doc, url);
    const focusElement = doc.getElementById(focusId);
    focusElement.classList.add('focus');

    state.focus = focusId;
    return focusElement;
  };

  const watchFocusChange = (focusElement, state) => {
    // Options for the observer (which mutations to observe)
    const config = {attributes: true, childList: true, subtree: true};

    // Callback function to execute when mutations are observed
    const callback = (mutationsList, _observer) => {
      let focus = null;

      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          focus = document.querySelector('.focus');
          state.focus = focus.id;
          break;
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(focusElement, config);
  };

  return {
    createElement,
    appendChildrenTo,
    setFocusElement,
    setFocusId,
    watchFocusChange,
  };
})();
