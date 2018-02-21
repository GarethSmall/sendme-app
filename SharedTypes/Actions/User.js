// @flow

export type UserLoginSuccess = {
  type : String,
}
export type UserLoginError = {
  type : String,
  response : {
    message : String,
  }
}

export type UserAction =
  | UserLoginSuccess
  | UserLoginError;