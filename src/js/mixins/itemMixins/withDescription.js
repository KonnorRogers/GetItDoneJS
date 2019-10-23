/**
 * This provides utility functions for description.
 * @param {Object} [props={}] - The object to append the methods onto
 * @param {string} [props.description=''] - Description to add to an object.
 * Descriptions are simply strings
 *
 * @return {Object} Returns an {Object} with methods appended.
 * @category Mixins/ItemMixins
 * @module
 * @example
 *
 * import {withDescription} from '<path>/<to>/withDescription.js';
 * const myDesc = withDescription({description: 'my description'})({});
 * myDesc.getDescription();
 * // => 'my description'
 *
 * const newDesc = withDescription({})({})
 * newDesc.getDescription();
 * // => ''
 */
export const withDescription = ({description = ''} = {}) => obj => {
  let _description = description;

  /**
   * @return {string} Returns the description of the {Object}
   */
  const getDescription = () => _description;

  /**
   * Modifies the value of description
   */
  const setDescription = newDescription => (_description = newDescription);

  return {
    ...obj,
    getDescription,
    setDescription,
  };
};
