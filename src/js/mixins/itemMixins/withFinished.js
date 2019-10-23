/**
 * This provides utility functions for finished property.
 * @param {Object} [props = {}] - The properties {Object} to pull from
 * @param {boolean} [props.finished = false] - Boolean value of if the item is finished
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @category Mixins/ItemMixins
 * @module
 * @example
 * import {withFinished} from '<path>/<to>/withFinished.js';
 * let item = withFinished()({});
 * item.isFinished();
 * // => false
 *
 * item.isIncomplete();
 * // => true
 *
 * item.finish();
 * item.isFinished();
 * // => true
 *
 * item = withFinished({finished: false})({});
 * item.isFinished();
 * // => false
 */

export const withFinished = ({finished = false} = {}) => obj => {
  const isFinished = () => finished;
  const isIncomplete = () => !finished;
  const finish = () => (finished = true);
  const markIncomplete = () => (finished = false);

  return {
    ...obj,
    isFinished,
    isIncomplete,
    finish,
    markIncomplete,
  };
};
