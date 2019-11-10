import {Base} from '../utilities/base.js';
import {Tab} from '../utilities/tab.js';
import BoardState from '../../lib/board.js';
import {saveObject, loadObject} from '../../utils/storageUtil.js';

export const Board = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  // Fetch from localStorage first
  const _boardState = BoardState;

  const getBoardState = () => {
    return _boardState;
  };

  const updateLocalStorage = () => {
    const tasks = _boardState.getTasks();
    const projects = _boardState.getProjects();

    saveObject({tasks, projects}, 'board');
  };

  const retrieveLocalStorage = () => {
    const obj = loadObject('board');

    _boardState.setTasks(obj.tasks);
    _boardState.setProjects(obj.projects);

    return obj;
  };

  const renderTabs = () => {
    const projectsTab = Tab({innerText: 'Projects', id: 'projects'}).render();
    const tasksTab = Tab({innerText: 'Tasks', id: 'tasks'}).render();

    const tabs = _base.dom().createElement('div', {id: 'tabs'});

    _base.dom().appendChildrenTo(tabs)(tasksTab, projectsTab);

    return tabs;
  };

  const renderTasks = () => {
    const tasks = getBoardState().getTasks();

    const list = _base.dom().createElement('ul', {className: 'list'});

    tasks.forEach((task, index) => {
      const item = _base
        .dom()
        .createElement('li', {id: `task[${index}]`, innerText: task});
      list.appendChild(item);
    });

    return list;
  };

  const renderProjects = () => {
    const projects = getBoardState().getProjects();

    const list = _base.dom().createElement('ul', {className: 'list'});

    projects.forEach((project, index) => {
      const item = _base
        .dom()
        .createElement('li', {id: `project[${index}]`, innerText: project});
      list.appendChild(item);
    });

    return list;
  };

  const renderCurrentFocusList = () => {
    if (getBoardState().focus === 'projects') {
      return renderProjects();
    }

    return renderTasks();
  };

  const render = () => {
    const id = _baseProps.id || 'board';
    const element = _baseProps.element || 'div';

    _base.setProps({id, element});

    const board = _base.dom().createElement(element, _baseProps);

    _base.dom().appendChildrenTo(board)(renderTabs(), renderCurrentFocusList());
    console.log(getBoardState().focus);

    return board;
  };

  return {render, getBoardState, retrieveLocalStorage, updateLocalStorage};
};
