// @flow

import { ReducerType } from '../../../SharedTypes/ReducerType';

export function login({ username, password } : { username : String, password : String }) {
  if (username === 'gareth' && password === '1234') {
    return {
      type: ReducerType.USER.LOGIN_SUCCESS,
    }
  } else {
    return {
      type: ReducerType.USER.LOGIN_ERROR,
      response: {
        message: 'Inccorect Username/Password',
      },
    }
  }
}