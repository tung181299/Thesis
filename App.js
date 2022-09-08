import React, { Component, useState, useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigate/bottomNavigate';
import { navigationRef } from './src/navigation/RootNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Auth/Login';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import SignUp from './src/screens/Auth/Register';
const { WebhookClient } = require('dialogflow-fulfillment');
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

//Middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default function AppSaga() {
  return <App />;
}

sagaMiddleware.run(rootSaga);

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MyTabs} />
    </Stack.Navigator>
  );
}
