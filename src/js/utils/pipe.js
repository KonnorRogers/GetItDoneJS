/**
 * pipe() is a utility function which will add multiple functions onto it. The functions passed in
 * should take in an {Object} parameter.
 * This function is similar to {@link https://lodash.com/docs/#flow|lodash's flow function}. It is taken from Eric Elliot.
 *
 * @param {...Function|Function[]} ...fns - Given an array of functions, pipe them into an object
 * @return {Function({Object})} Returns a function with multiple functions added to it. The function takes in an Object
 *   to pipe functions onto.
 *
 * @example
 * const createDrone = ({capacity = '3000mAh'}) => pipe(
 *     withFlying,
 *     withBattery({capacity}),
 *     withConstructor(createDrone)
 *   )({});
 *
 * @see {@link https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1#ca97|pipe function}
 * @see {@link ItemMixin} for further usage
 */
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
