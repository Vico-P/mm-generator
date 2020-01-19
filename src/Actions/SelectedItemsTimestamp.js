/**
 * Actions for timestamp items selection
 */
export const ADD_SELECTED_ITEM_TIMESTAMP = 'ADD_SELECTED_ITEM_TIMESTAMP';
export const addItemToTimestamp = item => ({
  type: ADD_SELECTED_ITEM_TIMESTAMP,
  item,
});

export const DELETE_ITEM_TIMESTAMP = 'DELETE_ITEM_TIMESTAMP';
export const deleteItemTimestamp = itemId => ({
  type: DELETE_ITEM_TIMESTAMP,
  itemId,
});

export const MODIFY_TIMESTAMP = 'MODIFY_TIMESTAMP';
export const modifyTimestamp = data => ({
  type: MODIFY_TIMESTAMP,
  data,
});
