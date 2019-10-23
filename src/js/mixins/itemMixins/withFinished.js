export const withFinished = ({finished = false} = {}) => obj => {
  const isFinished = () => finished;
  const isIncomplete = () => !finished;
  const finish = () => (finished = true);
  const markIncomplete = () => (finished = false);

  return {
    ...obj,
    isFinished,
    isIncomplete,
    finish,
    markIncomplete,
  };
};
