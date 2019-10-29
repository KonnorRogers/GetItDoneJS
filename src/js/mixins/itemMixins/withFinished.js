/**
 * Mixin for using finished. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {boolean} [finished=false] - The finished of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withFinished to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withFinished} from '<path>/<to>/withFinished.js';
 *
 * // with pipe()
 * const obj = pipe(withFinished)({});
 * obj.isFinished(); // => false
 *
 * // As a standalone
 * const newObj = withFinished()({});
 * newObj.finish();
 * newObj.isFinished(); // => true
 * newObj.isIncomplete(); // => false
 *
 * newObj.markIncomplete();
 * newObj.isIncomplete(); // => true
 */
export const withFinished = (finished = false) => obj => {
  let _finished = finished;

  const isFinished = () => _finished;
  const isIncomplete = () => !_finished;
  const finish = () => (_finished = true);
  const markIncomplete = () => (_finished = false);

  return {
    ...obj,
    isFinished,
    isIncomplete,
    finish,
    markIncomplete,
  };
};
