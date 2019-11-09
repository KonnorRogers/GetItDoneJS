import {addToArray} from '../../utils/arrayUtils.js';

/**
 * Mixin for using projects. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {string|string[]} [projects=[]] - The projects of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withProjects to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withProjects} from '<path>/<to>/withProjects.js';
 *
 * // with pipe()
 * const obj = pipe(withProjects)({});
 * obj.getProjects(); // => []
 *
 * // As a standalone
 * const newObj = withProjects()({});
 * newObj.setProjects('project1', 'project2');
 * newObj.getProjects(); // => ['project1', 'project2']
 */
export const withProjects = (projects = []) => obj => {
  let _projects = projects;

  const addProjects = (...newProjects) => {
    _projects = addToArray(_projects)(newProjects.flat());
    return _projects;
  };

  const getProjects = () => _projects;

  return {
    ...obj,
    addProjects,
    getProjects,
  };
};
