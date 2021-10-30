/* eslint-disable import/prefer-default-export */

/**
 * Checks an object for null or undefined values
 * @param {Object} obj Object to check for null or undefined values
 * @returns bool
 */
export const hasEmpty = (obj) =>
  Object.values(obj).some((o) => o === undefined || o === null);
