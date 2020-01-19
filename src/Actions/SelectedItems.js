/**
 * Actions for items selection
 */
export const ADD_SELECTED_ITEM = 'ADD_SELECTED_ITEM';
export const addItemToTimestamp = item => ({
    type: ADD_SELECTED_ITEM,
    item,
});

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteUserInfos = itemId => ({
    type: DELETE_ITEM,
    itemId,
});
