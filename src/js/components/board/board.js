import {Base} from '../utilities/base.js';
import {Tab} from '../utilities/tab.js';
import BoardState from '../../lib/board.js';

export const Board = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const _boardState = BoardState;

  const getBoardState = () => {
    return _boardState;
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

    console.log(tasks);
    const list = _base.dom().createElement('ul', {className: 'list'});

    tasks.forEach((task, index) => {
      const item = _base
        .dom()
        .createElement('li', {id: `task[${index}]`, innerText: task});
      list.appendChild(item);
    });

    return list;
  };

  const renderCurrentFocusList = () => {
    if (getBoardState().currentFocus === 'tasks') {
      return renderTasks();
    } else if (getBoardState().currentFocus === 'projects') {
      return renderProjects();
    }
  };

  const render = () => {
    const id = _baseProps.id || 'board';
    const element = _baseProps.element || 'div';

    _base.setProps({id, element});

    const board = _base.dom().createElement(element, _baseProps);

    _base.dom().appendChildrenTo(board)(renderTabs(), renderTasks());

    return board;
  };

  return {render, getBoardState};
};
