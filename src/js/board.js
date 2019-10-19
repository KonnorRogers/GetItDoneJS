/**
 * The default board where projects and tasks will be displayed
 * @return {Object} - Returns the board object which contains various projects, tasks, etc
 */
export default (function Board(props = {}) {
  const _projects = props.projects || [];
  const _tasks = props.tasks || [];

  const _items = () => _projects.concat(_tasks);

  const addProject = project => {
    _projects.push(project);
  };

  const addTask = task => {
    _tasks.push(task);
  };

  return {
    addTask,
    addProject,
    projects: _projects,
    tasks: _tasks,
    items: _items,
  };
})();
