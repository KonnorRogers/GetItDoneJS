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

  const renderList = (type, listItems) => {
    const list = _base.dom().createElement('ul', {
      id: `${type}-list`,
      className: 'item-list hide',
    });

    listItems.forEach((item, index) => {
      const itemElement = _base
        .dom()
        .createElement('li', {id: `${type}[${index}]`, innerText: item});
      list.appendChild(itemElement);
    });

    return list;
  };

  const renderTasks = () => {
    const tasks = getBoardState().getTasks();

    return renderList('task', tasks);
  };

  const renderProjects = () => {
    const projects = getBoardState().getProjects();

    return renderList('project', projects);
  };

  const render = () => {
    const id = _baseProps.id || 'board';
    const element = _baseProps.element || 'div';

    _base.setProps({id, element});

    const board = _base.dom().createElement(element, _baseProps);

    _base.dom().appendChildrenTo(board)(
      renderTabs(),
      renderProjects(),
      renderTasks(),
    );

    displayTargetList(board);
    return board;
  };

  // Display lists
  const displayTargetList = board => {
    // const tabElement = document.querySelector('#tabs');
    const tabElement = board.querySelector('#tabs');

    _base.dom().targetObserver(tabElement, () => {
      // const element = document.querySelector('.show');
      // const targetElement = document.querySelector('.target');
      const element = board.querySelector('.show');
      const targetElement = board.querySelector('.target');

      if (element) {
        _base.dom().hideElement(element);
      }

      if (targetElement.id === 'tasks') {
        // const taskList = document.querySelector('#task-list');
        const taskList = board.querySelector('#task-list');
        _base.dom().showElement(taskList);
      } else if (targetElement.id === 'projects') {
        const projectList = board.querySelector('#project-list');
        _base.dom().showElement(projectList);
      }
    });
  };

  return {
    render,
    getBoardState,
    retrieveLocalStorage,
    updateLocalStorage,
    displayTargetList,
  };
};
