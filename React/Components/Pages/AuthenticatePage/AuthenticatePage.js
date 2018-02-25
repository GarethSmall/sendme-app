import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Store } from '../../../../SharedTypes/Store';
import Login from '../Login/Login';

type Props = {
  +isLoggedIn : boolean,
};

const mapStateToProps = (state : Store) : Props => ({
  isLoggedIn: state.User.isLoggedIn,
});

@connect(mapStateToProps)
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