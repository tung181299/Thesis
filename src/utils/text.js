import {Text} from 'react-native';
import React from 'react'
import * as TextStyle from '../common/text'

export const handleText = text => {
  let data = text.split('\n').map(c => {
    return <Text style={[TextStyle.medium, {fontSize: 13}]}> {c} </Text>;
  });
  return data
};
