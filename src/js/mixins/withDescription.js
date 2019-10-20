export const withDescription = ({description = ''}) => obj => {
  const getDescription = () => description;
  const setDescription = newDescription => (description = newDescription);

  return {
    ...obj,
    getDescription,
    setDescription,
  };
};
