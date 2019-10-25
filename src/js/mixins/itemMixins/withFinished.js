export const withFinished = (finished = false) => obj => {
  let _finished = finished;

  const isFinished = () => _finished;
  const isIncomplete = () => !_finished;
  const finish = () => (_finished = true);
  const markIncomplete = () => (_finished = false);

  return {
    ...obj,
    isFinished,
    isIncomplete,
    finish,
    markIncomplete,
  };
};
