// @flow
import type { UserState } from '../../SharedTypes/Reducer/User';
import type { UserAction, UserLoginError } from '../../SharedTypes/Actions/User';
import ActionType from '../../SharedTypes/ActionType';

export const initialState: UserState = {
  isLoggedIn: false,
  loginError: null,
};

export default function(state : UserState = initialState, action : UserAction) : UserState {
  switch (action != null && action.type) {
    case ActionType.USER.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        loginError: null,
      };
    }
    case ActionType.USER.LOGIN_ERROR: {
      const a = ((action : any) : UserLoginError);
      return {
        ...state,
        loginError: a.response.message,
      };
    }
    default: {
      return state || initialState;
    }
  }
}
