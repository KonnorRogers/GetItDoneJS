export const withPriority = (priority = 4) => obj => {
  let _priority = priority;
  const MIN_PRIORITY = 1;
  const MAX_PRIORITY = 4;

  const getPriority = () => _priority;

  const setPriority = newPriority => {
    // If its a valid priority number, set priority
    if (validatePriority(newPriority)) {
      _priority = parsePriority(newPriority);
    }

    return _priority;
  };

  const validatePriority = newPriority => {
    const priorityType = typeof newPriority;

    // If its not a string or number, dont set it
    if (!isStringOrNumber(priorityType)) {
      return false;
    }

    newPriority = parsePriority(newPriority);

    // Check that its a valid priority range
    if (newPriority > MAX_PRIORITY || newPriority < MIN_PRIORITY) {
      return false;
    }

    return true;
  };

  const parsePriority = newPriority => {
    const priorityType = typeof newPriority;
    // If its a string, parse it to base 10
    if (isString(priorityType)) {
      newPriority = parseInt(newPriority, 10);
    }

    return newPriority;
  };

  const isStringOrNumber = priorityType => {
    if (isString(priorityType) || priorityType === 'number') {
      return true;
    }
    return false;
  };

  const isString = priorityType => {
    if (priorityType === 'string') {
      return true;
    }

    return false;
  };

  return {
    ...obj,
    getPriority,
    setPriority,
  };
};
