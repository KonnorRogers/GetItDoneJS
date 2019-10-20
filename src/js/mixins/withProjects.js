export const withProjects = (projects = []) => obj => {
  const addProjects = (...newProjects) =>
    newProjects.flat().map(project => projects.push(project));
  const getProjects = () => projects;

  return {
    ...obj,
    addProjects,
    getProjects,
  };
};
