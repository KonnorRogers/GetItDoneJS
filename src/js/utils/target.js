import DomManipulator from './domManipulator.js';

export const Target = () => {
  const handleTargets = () => {
    const tabs = ['#tasks', '#projects'];
    DomManipulator.setTarget(tabs, tabs[0]);

    window.addEventListener('hashchange', e => {
      // Prevent scrolling
      e.target.scrollTo(0, 0);

      DomManipulator.setTarget(tabs, tabs[1]);
    });
  };

  return {
    handleTargets,
  };
};
