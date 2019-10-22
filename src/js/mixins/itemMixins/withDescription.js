/**
 * This provides utility functions for description.
 * @param {string} [''] object.description - Description to add to an object. Descriptions are simply strings
 *
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @mixin
 */
export const withDescription = ({description = ''}) => obj => {
  const getDescription = () => description;
  const setDescription = newDescription => (description = newDescription);

  return {
    ...obj,
    getDescription,
    setDescription,
  };
};
