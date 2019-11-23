/**
 * Mixin for using priority. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 * Priorities can only can strings or numbers and must be between 1-4
 *
 * @param {number} [priority=4] - The priority of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withPriority to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withPriority} from '<path>/<to>/withPriority.js';
 *
 * // with pipe()
 * const obj = pipe(withPriority)({});
 * obj.getPriority(); // => 1
 *
 * // As a standalone
 * const newObj = withPriority()({});
 * newObj.setPriority(1);
 * newObj.getPriority(); // => 1
 */
export const withPriority = (priority = 4) => obj => {
  let _priority = priority;
  const MIN_PRIORITY = 1;
  const MAX_PRIORITY = 4;

  const getPriority = () => _priority;

  const setPriority = newPriority => {
    // If its a valid priority number, set priority
    if (validatePriority(newPriority)) {
      _priority = parsePriority(newPriority);
    }

    return _priority;
  };

  const validatePriority = newPriority => {
    const priorityType = typeof newPriority;

    // If its not a string or number, dont set it
    if (!isStringOrNumber(priorityType)) {
      return false;
    }

    newPriority = parsePriority(newPriority);

    // Check that its a valid priority range
    if (newPriority > MAX_PRIORITY || newPriority < MIN_PRIORITY) {
      return false;
    }

    return true;
  };

  const parsePriority = newPriority => {
    const priorityType = typeof newPriority;
    // If its a string, parse it to base 10
    if (isString(priorityType)) {
      newPriority = parseInt(newPriority, 10);
    }

    return newPriority;
  };

  const isStringOrNumber = priorityType => {
    if (isString(priorityType) || priorityType === 'number') {
      return true;
    }
    return false;
  };

  const isString = priorityType => {
    if (priorityType === 'string') {
      return true;
    }

    return false;
  };

  return {
    ...obj,
    getPriority,
    setPriority,
  };
};
