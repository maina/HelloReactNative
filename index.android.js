/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Login from "./components/login";
import userReducers from "./reducers/user";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

// middleware that logs actions
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

//let store=createStore(combineReducers({userReducers}));
const rootReducer = combineReducers({ userReducers });
let initialState = {};

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware
    )
  );
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore(initialState);

class App extends React.Component {
  render() {
    return <Login />;
  }
}
//Redux needs to inject a store holding the app state into the app.
//To do so, it requires a ‘Provider’ wrapping the whole app.
// This store is basically a combination of reducers
class MyApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("ToDo", () => MyApp);
