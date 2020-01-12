import { ADD_SELECTED_ITEM_TIMESTAMP, DELETE_ITEM_TIMESTAMP } from "../../Actions/SelectedItemsTimestamp";

const items = (state = {
  timestamp: [],
  post: [],
}, action) => {
  switch (action.type) {
    case ADD_SELECTED_ITEM_TIMESTAMP:
      return Object.assign({}, state, {
        timestamp: [...state.timestamp, action.item]
      });
    case DELETE_ITEM_TIMESTAMP:
      return Object.assign({}, state, {
        timestamp: state.timestamp.filter((element) => element.id !== action.itemId)
      });
    default:
      return state;
  }
};

export default items;