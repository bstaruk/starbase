/* eslint-disable import/prefer-default-export */

/**
 * Checks an object for null or undefined entries
 * @param {Object} obj Object to check for null or undefined entries
 * @returns bool
 */
export const hasEmpty = (obj) =>
  Object.keys(obj).some((key) => obj[key] === undefined || obj[key] === null);
