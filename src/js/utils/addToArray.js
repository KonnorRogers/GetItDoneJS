// Utility function for adding element[s] to an array
// This does not mutate the original array passed in
// This will flatten the elements passed in so there cannot be nested arrays

export const addToArray = (ary, ...elements) => {
  const newAry = ary;
  elements.flat().forEach(element => newAry.push(element));
  return newAry;
};
