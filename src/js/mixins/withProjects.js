import {addToArray} from '../utils/addToArray.js';

// Allows an item to implement a projects array
export const withProjects = (projects = []) => obj => {
  let _projects = projects;

  const addProjects = (...newProjects) => {
    _projects = addToArray(_projects, newProjects.flat());
    return _projects;
  };

  const getProjects = () => _projects;

  return {
    ...obj,
    addProjects,
    getProjects,
  };
};
