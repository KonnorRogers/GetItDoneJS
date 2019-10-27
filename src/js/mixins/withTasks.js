import {addToArray} from '../utils/arrayUtils.js';

export const withTasks = (tasks = []) => obj => {
  let _tasks = tasks;

  const addTasks = (...newTasks) => {
    _tasks = addToArray(_tasks, newTasks.flat());
    return _tasks;
  };

  const getTasks = () => _tasks;

  return {
    ...obj,
    getTasks,
    addTasks,
  };
};
