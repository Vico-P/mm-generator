/**
 * Actions for timestamp items selection
 */
export const ADD_SELECTED_ITEM_TIMESTAMP = 'ADD_SELECTED_ITEM_TIMESTAMP';
export const addItemToTimestamp = item => ({
  type: ADD_SELECTED_ITEM_TIMESTAMP,
  item,
});

export const DELETE_ITEM_TIMESTAMP = 'DELETE_ITEM_TIMESTAMP';
export const deleteUserInfos = itemId => ({
  type: DELETE_ITEM_TIMESTAMP,
  itemId,
});
