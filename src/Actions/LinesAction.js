/**
 * Actions for timestamp items selection
 */
export const ADD_NEW_LINE = 'ADD_NEW_LINE';
export const addLine = newLine => ({
  type: ADD_NEW_LINE,
  newLine,
});

export const DELETE_LINE = 'DELETE_LINE';
export const deleteLine = indexToDelete => ({
  type: DELETE_LINE,
  indexToDelete,
});

export const MODIFY_LINE = 'MODIFY_LINE';
export const modifyLine = data => ({
  type: MODIFY_LINE,
  data,
});
