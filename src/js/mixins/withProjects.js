export const withProjects = ({projects = []}) => obj => {
  const addProject = project => projects.push(project);
  const getProjects = () => projects;

  return {
    ...obj,
    addProject,
    getProjects,
  };
};
