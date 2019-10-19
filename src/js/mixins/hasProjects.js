export default function hasProjects({projects = []}) {
  const _projects = projects;

  const addProject = project => {
    _projects.push(project);
  };

  return Object.assign(
    {},
    {
      addProject,
      getProjects: () => _projects,
    },
  );
}
