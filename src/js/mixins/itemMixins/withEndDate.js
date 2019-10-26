export const withEndDate = (endDate = null) => obj => {
  let _endDate = endDate;

  const getEndDate = () => _endDate;
  const setEndDate = newEndDate => (_endDate = newEndDate);

  return {
    ...obj,
    getEndDate,
    setEndDate,
  };
};
