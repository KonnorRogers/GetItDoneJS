/**
 * This provides utility functions for projects.
 * @param {Project[]} [[]] object.projects - Project(s) to add to an object.
 * @return {Object} Returns an {Object} with methods appended.
 * @mixin
 */
export const withProjects = ({projects = []}) => obj => {
  /**
   * Add newProject onto the current tasks
   * @param {Project|Project[]} newProjects - Task(s) to add to the current tasks array
   * @return {Project[]} Returns the task(s) passed into the params as an array
   */
  const addProjects = (...newProjects) =>
    newProjects.flat().map(project => projects.push(project));

  /**
   * @return {Project[]} Return the array of projects
   */
  const getProjects = () => projects;

  return {
    ...obj,
    addProjects,
    getProjects,
  };
};
