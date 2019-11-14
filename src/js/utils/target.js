export const Target = () => {
  const handleTargets = () => {
    const tabs = ['#tasks', '#projects'];
    _base.dom().setTarget(tabs, tabs[0]);

    window.addEventListener('hashchange', e => {
      // Prevent scrolling
      e.target.scrollTo(0, 0);

      _base.dom().setTarget(tabs, tabs[1]);
    });
  };

  return {
    handleTargets,
  };
};
