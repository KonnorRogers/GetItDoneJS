export default function hasTasks({tasks = []}) {
  const _tasks = tasks;

  const addTask = task => {
    _tasks.push(task);
  };

  return Object.assign(
    {},
    {
      addTask,
      getTasks: () => _tasks,
    },
  );
}
