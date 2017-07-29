import React from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  ListView
} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";

//‘mapStateToProps’ and ‘mapDispatchToProps’ are two functions bound with ‘connect’ to the component:
//this makes Redux know that this component needs to be passed a piece of the state (everything under ‘userReducers’)
//and all the actions available in the app.
//Just by doing this, we will have access to the login action (as it is used in the onLoginButtonPress)
//and to the state of the app (as it is used in the !this.props.user.loggedIn statement)
function mapStateToProps(state) {
  return { user: state.userReducers.user };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

var Login = React.createClass({
  onLoginButtonPress() {
    this.props.login({ username: "devuser", password: "123456" });
  },

  render() {
    return (
      <View>
        {!this.props.user.loggedIn &&
          <TouchableHighlight onPress={this.onLoginButtonPress}>
            <Text>Log In</Text>
          </TouchableHighlight>}
      </View>
    );
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
