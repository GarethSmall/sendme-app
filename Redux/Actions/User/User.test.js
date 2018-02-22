// @flow
import { login } from './User';
import ActionType from '../../../SharedTypes/ActionType';

describe('User Reducer', () => {
  test('should log a user in', () => {
    const expectedAction = {
      type: ActionType.USER.LOGIN_SUCCESS,
    };
    //This will need to be changed in the future to support non dynamic values
    expect(login('G', '1')).toEqual(expectedAction)
  });
  test('should not log a user in', () => {
    //This will need to be changed in the future to support non dynamic values
    expect(login('g', '13').type).toEqual(ActionType.USER.LOGIN_ERROR);
    expect(login('g', '13').response).toBeTruthy();
    expect(login('g', '13').response.message).toBeTruthy();
  });
});
