import React, { PureComponent } from 'react';
import Login from './Components/Behavioral/Login';
import { Font } from 'expo';

export default class App extends PureComponent {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('./Assets/fonts/Roboto-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (<Login />);
  }
}