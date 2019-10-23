/**
 * This provides utility functions for description.
 * @param {Object} [props = {}] - The object to append the methods onto
 * @param {string} [props.description = ''] - Description to add to an object.
 * Descriptions are simply strings
 *
 * @return {Object} Returns an {Object} with methods appended.
 * @mixin
 * @example
 * const myDesc = withDescription({description: 'my description'})({});
 * myDesc.getDescription();
 * // => 'my description'
 *
 * const newDesc = withDescription({})({})
 * newDesc.getDescription();
 * // => ''
 */
export const withDescription = ({description = ''} = {}) => obj => {
  const getDescription = () => description;
  const setDescription = newDescription => (description = newDescription);

  return {
    ...obj,
    getDescription,
    setDescription,
  };
};
