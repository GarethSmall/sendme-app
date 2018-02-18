// @flow
import React, { PureComponent } from 'react';
import { Text, TextInput, View } from 'react-native';
import LoginStyle from './LoginStyle';

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
      <View>
        <Text>SendMe App</Text>
        <TextInput
          style={LoginStyle.username}
          onChangeText={this.onChangeUsername}
          value={this.state.username}
        />
      </View>
    );
  }
}
