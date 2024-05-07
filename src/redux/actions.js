// actions.js
export const setObject = objectData => ({
  type: 'SET_OBJECT',
  payload: objectData,
});
// actions/objectActions.js
export const SAVE_STRING = 'SAVE_STRING';

export const saveString = (str) => {
  return {
    type: SAVE_STRING,
    payload: str,
  };
};
export const ADD_TO_ARRAY = 'ADD_TO_ARRAY';
export const addToArray = (data) => {
  return {
    type: ADD_TO_ARRAY,
    payload: data,
  };
};
