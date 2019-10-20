export const withStartDate = ({startDate = null}) => obj => {
  const getStartDate = () => startDate;
  const setStartDate = newStartDate => (startDate = newStartDate);

  return {
    ...obj,
    getStartDate,
    setStartDate,
  };
};
