import * as React from 'react';
import {StackActions, DrawerActions} from '@react-navigation/native';
import {BackHandler, Keyboard} from 'react-native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  // console.log('Navigation ref current: ', navigationRef.current, name);
  navigationRef.current?.navigate(name, params);
  // console.log(
  //   'Navigation ref after navigate: ',
  //   navigationRef.current?.getCurrentRoute(),
  // );
  // Bug: if not navigate first time, we need to navigate again
  if (navigationRef.current?.getCurrentRoute()?.name != name) {
    navigationRef.current?.navigate(name, params);
  }
}

export function push(name, params) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.push(name, params));
}

export function goBack() {
  if (navigationRef.current.canGoBack()) {
    navigationRef.current?.goBack();
    Keyboard.dismiss();
  } else BackHandler.exitApp();
}
/**
 * The state object specified in reset replaces
 * the existing navigation state with the new one,
 */
export function reset(name) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: name}],
  });
}

export function replace(name) {
  navigationRef.current?.dispatch(StackActions.replace(name));
}

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}
