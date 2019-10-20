export const withEndDate = ({endDate = null}) => obj => {
  const getEndDate = () => endDate;
  const setEndDate = newEndDate => (endDate = newEndDate);

  return {
    ...obj,
    getEndDate,
    setEndDate,
  };
};
