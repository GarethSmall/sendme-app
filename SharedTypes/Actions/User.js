// @flow

export type UserLoginSuccess = {
  type : number,
}
export type UserLoginError = {
  type : number,
  response : {
    message : number,
  }
}

export type UserAction =
  | UserLoginSuccess
  | UserLoginError;