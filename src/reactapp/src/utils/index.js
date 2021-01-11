/* eslint-disable no-underscore-dangle */
export function _keys(obj = {}) {
  return Object.keys(obj);
}

export function _isArrayEmpty(arr = []) {
  return arr.length === 0;
}

export function _objToArray(obj) {
  return _keys(obj).map(key => obj[key]);
}