import { ADD_USER_INFOS, DELETE_USER_INFOS } from "../../Actions/Token";

const user = (state = {
  token: null,
  id: null,
  username: null,
  refreshToken: null,
}, action) => {
  switch (action.type) {
    case ADD_USER_INFOS:
      return Object.assign({}, state, {
        token: action.token || null,
        id: action.account_id || null,
        username: action.account_username || null,
        refreshToken: action.refresh_token || null,
      });
    case DELETE_USER_INFOS:
      return {};
    default:
      return state;
  }
};

export default user;