export const withPriority = (priority = 1) => obj => {
  const getPriority = () => priority;
  const setPriority = newPriority => (priority = newPriority);

  return {
    ...obj,
    getPriority,
    setPriority,
  };
};
