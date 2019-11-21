/**
 * Capitalize a string
 * @param {string} str - The string to capitalize
 * @returns {string} - Returns the string with the first letter capitalized
 */
export const capitalizeString = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
