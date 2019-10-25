// Mixin for using descriptions
export const withDescription = (description = '') => obj => {
  let _description = description;

  const getDescription = () => _description;

  const setDescription = newDescription => (_description = newDescription);

  return {
    ...obj,
    getDescription,
    setDescription,
  };
};
