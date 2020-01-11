/**
 * Actions for User token
 */

export const ADD_USER_INFOS = 'ADD_USER_INFOS';

export const addUserInfos = oUserInfos => {
  const { access_token, account_id, account_username, refresh_token } = oUserInfos;
  return {
    type: ADD_USER_INFOS,
    token: `Bearer ${access_token}`,
    account_id,
    account_username,
    refresh_token,
  };
}

export const DELETE_USER_INFOS = 'DELETE_USER_INFOS';
export const deleteUserInfos = () => ({ type: DELETE_USER_INFOS })
