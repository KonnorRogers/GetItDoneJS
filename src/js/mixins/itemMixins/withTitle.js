export const withTitle = (title = '') => obj => {
  let _title = title;
  const getTitle = () => _title;
  const setTitle = newTitle => (_title = newTitle);

  return {
    ...obj,
    getTitle,
    setTitle,
  };
};
