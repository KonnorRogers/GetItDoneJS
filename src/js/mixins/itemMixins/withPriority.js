/**
 * This provides utility functions for priorities.
 * @param {number} [1] object.priority - Priority to add to an object.
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @mixin
 */
export const withPriority = ({priority = 1} = {}) => obj => {
  const getPriority = () => priority;
  const setPriority = newPriority => (priority = newPriority);

  return {
    ...obj,
    getPriority,
    setPriority,
  };
};
