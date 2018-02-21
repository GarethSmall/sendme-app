// @flow
import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import LoginStyle from "./LoginStyle";
import Header1 from "../../Display/Header1/index";
import TextInput from "../../Display/TextInput/index";
import Button from "../../Display/Button/index";
import { connect } from "react-redux";
import { login } from "../../../../Redux/Actions/User/User";
import { bindActionCreators } from "redux";
import type { Store } from "../../../../SharedTypes/Store";

const actionsToBind = { login };
type ActionProps = { actions : typeof actionsToBind };

type FieldProps = {
  +loginError : ?String
};

const mapActionsToProps = (dispatch) : ActionProps => ({ actions: bindActionCreators(actionsToBind, dispatch) });

const mapStateToProps = (state : Store) : FieldProps => ({
  loginError: state.User.loginError
});

type Props = ActionProps;

type State = {
  username : String,
  password : String
};

@connect(mapStateToProps, mapActionsToProps)
export default class Login extends PureComponent<Props, State> {
  state = {
    username: "",
    password: ""
  };

  onChangeUsername = (username : String) => {
    this.setState({ username });
  };

  onChangePassword = (password : String) => {
    this.setState({ password });
  };

  onLogin = () => {
    const { actions: { login } } = this.props;
    const { username, password } = this.state;
    login({ username, password });
  };

  render() {
    const { loginError } = this.props;
    return (
      <View style={LoginStyle.view}>
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <Header1 style={{ fontSize: 50 }}>SendMe</Header1>
        </View>
        <View style={{ flex: 2, alignSelf: "stretch" }}>
          {loginError != null && <Text>{loginError}</Text>}
          <TextInput onChangeText={this.onChangeUsername} value={this.state.username} placeholder="Username" />
          <TextInput onChangeText={this.onChangePassword} value={this.state.password} secureTextEntry placeholder="Password" />
          <Button onPress={this.onLogin} title="Login" accessibilityLabel="Login" />
        </View>
      </View>
    );
  }
}
