import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../../Redux/Actions/User/User';
import { bindActionCreators } from 'redux';
import type { Store } from '../../../../SharedTypes/Store';
import Login from '../Login/Login';

const actionsToBind = { login };
type ActionProps = { actions : typeof actionsToBind };

type FieldProps = {
  +isLoggedIn : boolean,
};

const mapActionsToProps = (dispatch) : ActionProps => ({ actions: bindActionCreators(actionsToBind, dispatch) });

const mapStateToProps = (state : Store) : FieldProps => ({
  isLoggedIn: state.User.isLoggedIn,
});

type Props = ActionProps;

@connect(mapStateToProps, mapActionsToProps)
export default class AuthenticatePage extends PureComponent<Props> {

  render() {
    const { isLoggedIn } = this.props;
    return isLoggedIn ? (
      <h1>Yahoo you're logged in!</h1>
    ) : (
      <Login />
    );
  }
}