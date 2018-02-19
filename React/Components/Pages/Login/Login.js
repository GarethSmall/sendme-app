// @flow
import React, { PureComponent } from 'React';
import { View } from 'react-native';
import LoginStyle from './LoginStyle';
import Header1 from '../../Display/Header1/index';
import TextInput from '../../Display/TextInput/index';
import Button from '../../Display/Button/index';

type Props = {};
type State = {
  username : string,
}

export default class Login extends PureComponent<Props, State> {
  state = {
    username: '',
    password: '',
  };

  onChangeUsername = (username : string ) => {
    this.setState({ username });
  };

  onChangePassword = (password : string ) => {
    this.setState({ password });
  };

  onLogin = () => { console.log(1) };

  render() {
    return (
      <View style={LoginStyle.view}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Header1 style={{ fontSize: 50 }}>SendMe</Header1>
        </View>
        <View style={{ flex: 2, alignSelf: 'stretch' }}>
          <TextInput
            onChangeText={this.onChangeUsername}
            value={this.state.username}
            placeholder="Username"
          />
          <TextInput
            onChangeText={this.onChangePassword}
            value={this.state.password}
            secureTextEntry
            placeholder="Password"
          />
          <Button
            onPress={this.onLogin}
            title="Login"
            accessibilityLabel="Login"
          />
        </View>
      </View>
    );
  }
}
