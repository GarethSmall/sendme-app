// @flow
import React from 'react';
import { initialState } from './User';
import user from './User';
import { Reducer } from 'redux-testkit';
import { ActionType } from '../../SharedTypes/ActionType';

describe('User Reducer', () => {
  test('should have initial state', () => {
    expect(user()).toEqual(initialState);
  });

  test('should not have affected stated from non existent type', () => {
    Reducer(user).expect({type: 'THIS_TYPE_DOES_NOT_EXIST'}).toReturnState(initialState);
  });

  test('should log user in', () => {
    const existingState = initialState;
    const action = { type: ActionType.USER.LOGIN_SUCCESS };
    Reducer(user).withState(existingState).expect(action).toReturnState({...initialState, isLoggedIn: true});
  });

  test('should throw error message on bad login', () => {
    const existingState = initialState;
    const action = { type: ActionType.USER.LOGIN_ERROR, response: { message: 'Inccorect Username/Password'} };
    Reducer(user).withState(existingState).expect(action).toReturnState({...initialState, loginError: 'Inccorect Username/Password'});
  });
});
