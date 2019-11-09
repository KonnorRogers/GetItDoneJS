import {Base} from '../utilities/base.js';
import {Tab} from '../utilities/tab.js';

export const Board = (props = {}) => {
  const _base = Base(props);
  const _baseProps = _base.getProps();

  const renderTab = (props = {}) => {
    const tab = Tab(props);
    return tab.render();
  };

  const renderTabs = () => {
    const projectsTab = renderTab({innerText: 'Projects', id: 'projects-tab'});
    const tasksTab = renderTab({innerText: 'Tasks', id: 'tasks-tab'});

    const tabs = _base.dom().createElement('div', {id: 'tabs'});

    _base.dom().appendChildrenTo(tabs)(tasksTab, projectsTab);

    return tabs;
  };

  const render = () => {
    // Default id
    const id = _baseProps.id || 'board';

    // Default element
    const element = _baseProps.element || 'div';

    _base.setProps({id, element});

    const board = _base.dom().createElement(element, _baseProps);

    _base.dom().appendChildrenTo(board)(renderTabs());

    return board;
  };

  return {render};
};
