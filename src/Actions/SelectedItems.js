/**
 * Actions for items selection
 */
export const ADD_SELECTED_ITEM = 'ADD_SELECTED_ITEM';
export const addItem = item => ({
    type: ADD_SELECTED_ITEM,
    item,
});

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = itemId => ({
    type: DELETE_ITEM,
    itemId,
});
