import { ADD_SELECTED_ITEM_TIMESTAMP, DELETE_ITEM_TIMESTAMP, MODIFY_TIMESTAMP } from "../../Actions/SelectedItemsTimestamp";
import { ADD_SELECTED_ITEM, DELETE_ITEM } from "../../Actions/SelectedItems";
import {ADD_NEW_LINE, DELETE_LINE, MODIFY_LINE} from "../../Actions/LinesAction"

const items = (state = {
  timestamp: [],
  list: [],
  post: [],
  lines: [],
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
    case MODIFY_TIMESTAMP:
      return Object.assign({}, state, {
        timestamp: state.timestamp.map((timestampInfo, index) => {
          if (index === action.data.index) {
            return Object.assign({}, timestampInfo, {
              [action.data.elemToModify]: action.data.newValue,
            })
          }
          return timestampInfo;
        })
      });
    case ADD_SELECTED_ITEM:
      return Object.assign({}, state, {
        list: [...state.list, action.item]
      });
    case DELETE_ITEM:
      return Object.assign({}, state, {
        list: state.list.filter((element) => element.id !== action.itemId)
      });
    case ADD_NEW_LINE:
      return Object.assign({}, state, {lines: [...state.lines, action.newLine]});
    case DELETE_LINE:
      return (Object.assign({}, state, {lines: state.lines.filter((line, index) => index !== action.index)}));
    case MODIFY_LINE:
    return Object.assign({}, state, {
      lines: state.lines.map((lineInfo, index) => {
          if (index === action.data.index) {
            return Object.assign({}, lineInfo, {
              [action.data.elemToModify]: action.data.newValue,
            })
          }
          return lineInfo;
        })
      });
    default:
      return state;
  }
};

export default items;
