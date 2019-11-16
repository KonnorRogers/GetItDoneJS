import DomManipulator from './domManipulator.js';

export const Target = () => {
  const handleTargets = () => {
    const tabs = ['#tasks', '#projects'];
    DomManipulator.setTarget(tabs, tabs[0]);

    window.addEventListener('hashchange', e => {
      scrollTo(0, 0);
      DomManipulator.setTarget(tabs, tabs[1]);

      return false;
    });
  };

  return {
    handleTargets,
  };
};
