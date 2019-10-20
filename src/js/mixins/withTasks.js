export const withTasks = (tasks = []) => obj => {
  // const addTask = (...newTasks) => newTasks.map(task => tasks.push(task));
  const addTasks = (...newTasks) =>
    newTasks.flat().map(task => tasks.push(task));
  const getTasks = () => tasks;

  return {
    ...obj,
    getTasks,
    addTasks,
  };
};
