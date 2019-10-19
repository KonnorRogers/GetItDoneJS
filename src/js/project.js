import Item from './item.js';

/**
 * A Project factory function, will import default properties from Item
 * @see {@link Item}
 * @see Item
 * @param {Object} props - Properties of the Project
 * @return {Object} Returns an object with the given properties
 */
export default function Project(props = {}) {
  const _isProject = true;
  return Object.assign(
    {},
    Item(),
    {
      isProject: () => _isProject,
      tasks: [],
    },
    props,
  );
}
