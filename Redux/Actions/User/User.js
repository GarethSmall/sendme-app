// @flow

import { ActionType } from '../../../SharedTypes/ActionType';

export function login({ username, password } : { username : String, password : String }) {
  if (username === 'G' && password === '1') {
    return {
      type: ActionType.USER.LOGIN_SUCCESS,
    };
  } else {
    return {
      type: ActionType.USER.LOGIN_ERROR,
      response: {
        message: 'Inccorect Username/Password',
      },
    };
  }
}
