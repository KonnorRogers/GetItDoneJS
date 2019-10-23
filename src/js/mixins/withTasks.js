/**
 * This provides utility functions for tasks.
 * @param {Object} obj - The object to append the methods onto
 * @return {Object} Returns an {Object} with methods appended.
 * @mixin
 */
export const withTasks = ({tasks = []} = {}) => obj => {
  /**
   * Add newTasks onto the current tasks
   * @param {Task|Task[]} Task(s) to add to the current tasks array
   * @return {Task[]} Returns the task(s) passed into the params as an array
   */
  const addTasks = (...newTasks) =>
    newTasks.flat().map(task => tasks.push(task));

  /**
   * @return {Task[]} Return an array of tasks of the object
   */
  const getTasks = () => tasks;

  return {
    ...obj,
    getTasks,
    addTasks,
  };
};
