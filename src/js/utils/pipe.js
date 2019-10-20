/**
 * @param {Function[]} Given an array of functions, pipe them into an object
 * @return {Function} Returns a function with multiple functions
 * @example
 *   const createDrone = ({capacity = '3000mAh'}) => {
 *     pipe(
 *       withFlying,
 *       withBattery({capacity}),
 *       withConstructor(createDrone)
 *     )
 *   }({});
 */
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
