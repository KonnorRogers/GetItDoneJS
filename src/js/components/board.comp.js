import DomManipulator from '../utils/domManipulator.js';
import {Base} from './base.comp.js';
import {Tab} from './tab.comp.js';

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

    const tabs = DomManipulator.createElement('div', {id: 'tabs'});

    DomManipulator.appendChildrenTo(tabs)(tasksTab, projectsTab);

    return tabs;
  };

  const render = () => {
    // Default id
    const id = _baseProps.id || 'board';

    // Default element
    const element = _baseProps.element || 'div';

    _base.setProps({id, element});

    const board = DomManipulator.createElement(element, _baseProps);

    DomManipulator.appendChildrenTo(board)(renderTabs());

    return board;
  };

  return {render};
};
