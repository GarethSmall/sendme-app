// @flow
import React, { PureComponent } from 'react';
import { TextInput, View } from 'react-native';
import LoginStyle from './LoginStyle';
import Header1 from '../../Display/Header1/index';

type Props = {};
type State = {
  username : string,
}

export default class Login extends PureComponent<Props, State> {
  state = {
    username: '',
  };

  onChangeUsername = (username : string ) => {
    console.log(username);
    this.setState({ username });
  };

  render() {
    return (
      <View style={LoginStyle.view}>
        <Header1>SendMe App</Header1>
        <TextInput
          style={LoginStyle.username}
          onChangeText={this.onChangeUsername}
          value={this.state.username}
        />
      </View>
    );
  }
}
