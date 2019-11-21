import {Base} from '../utilities/base.js';
import {Tab} from '../utilities/tab.js';
import BoardState from '../../lib/board.js';
import {ProjectForm} from '../projects/projectForm.js';
import {TaskForm} from '../tasks/taskForm.js';
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

    const docFrag = new DocumentFragment();
    const taskForm = TaskForm({item: 'task'}).render();
    const list = renderList('task', tasks);

    _base.dom().appendChildrenTo(docFrag)(taskForm, list);
    return docFrag;
  };

  const renderProjects = () => {
    const projects = getBoardState().getProjects();

    const docFrag = new DocumentFragment();
    const projectForm = ProjectForm({item: 'project'}).render();
    const list = renderList('project', projects);

    _base.dom().appendChildrenTo(docFrag)(projectForm, list);
    return docFrag;
  };

  const renderFormBackground = () => {
    const props = {
      element: 'button',
      className: 'item-form-background hide',
      tabIndex: -1,
      onclick: () => {
        const form = document.querySelector('.item-form.show');
        _base.dom().hideElement(form);

        const btn = document.querySelector('.item-form-background');
        _base.dom().hideElement(btn);
      },
    };
    const btn = _base.dom().createElement(props.element, props);

    _base.dom().escKeyListener(document, () => {
      const form = document.querySelector('.item-form.show');
      _base.dom().hideElement(form);
      _base.dom().hideElement(btn);
    });
    return btn;
  };

  const render = () => {
    const id = _baseProps.id || 'board';
    const element = _baseProps.element || 'div';

    _base.setProps({id, element});

    const board = _base.dom().createElement(element, _baseProps);

    _base.dom().appendChildrenTo(board)(
      renderTabs(),
      renderFormBackground(),
      renderProjects(),
      renderTasks(),
    );

    displayTargetList(board);
    return board;
  };

  // Display lists
  const displayTargetList = board => {
    const tabElement = board.querySelector('#tabs');

    _base.dom().targetObserver(tabElement, () => {
      const targetElement = board.querySelector('.target');

      const projectList = board.querySelector('#project-list');
      const taskList = board.querySelector('#task-list');

      const projectBtn = board.querySelector('.add-project-btn');
      const taskBtn = board.querySelector('.add-task-btn');

      const tasks = [taskBtn, taskList];
      const projects = [projectBtn, projectList];

      if (targetElement.id === 'tasks') {
        tasks.forEach(e => _base.dom().showElement(e));
        projects.forEach(e => _base.dom().hideElement(e));
      } else if (targetElement.id === 'projects') {
        projects.forEach(e => _base.dom().showElement(e));
        tasks.forEach(e => _base.dom().hideElement(e));
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
