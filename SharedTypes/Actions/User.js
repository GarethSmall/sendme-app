// @flow

export type UserLoginSuccess = {
  type : string,
}
export type UserLoginError = {
  type : string,
  response : {
    message : string,
  }
}

export type UserAction =
  | UserLoginSuccess
  | UserLoginError;