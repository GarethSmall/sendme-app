// @flow
import type { UserState } from "../../SharedTypes/Reducer/User";
import type { UserAction, UserLoginError } from "../../SharedTypes/Actions/User";
import { ReducerType } from "../../SharedTypes/ReducerType";

export const initialState: UserState = {
  isLoggedIn: false,
  loginError: null
};

export default function(state : UserState = initialState, action : UserAction) : UserState {
  switch (action.type) {
    case ReducerType.USER.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        loginError: null
      };
    }
    case ReducerType.USER.LOGIN_ERROR: {
      const a = ((action : any) : UserLoginError);
      return {
        ...state,
        loginError: a.response.message
      };
    }
    default: {
      return state || initialState;
    }
  }
}
