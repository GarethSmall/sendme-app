import React, { PureComponent } from 'react';
import { Font } from 'expo';
import User from './Redux/Reducers/User';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import AuthenticatePage from './React/Components/Pages/AuthenticatePage/AuthenticatePage';

const store = createStore(combineReducers({ User }));
export default class App extends PureComponent {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('./Assets/fonts/Roboto-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Provider store={store}>
        <AuthenticatePage />
      </Provider>
    );
  }
}