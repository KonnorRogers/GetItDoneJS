export const withTitle = ({title = ''} = {}) => obj => {
  const getTitle = () => title;
  const setTitle = newTitle => (title = newTitle);

  return {
    ...obj,
    getTitle,
    setTitle,
  };
};
