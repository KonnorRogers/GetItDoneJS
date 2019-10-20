export const withTasks = ({tasks = []}) => obj => {
  const getTasks = () => tasks;
  const addTask = task => tasks.push(task);
  return {
    ...obj,
    getTasks,
    addTask,
  };
};
