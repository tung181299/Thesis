import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Navigation from '../../../navigation/RootNavigation';

export default function Header({title, iconRightName}) {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => Navigation.goBack()}>
        <Icon name="chevron-back" size={24} />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
      {iconRightName && (
        <TouchableOpacity
          style={[styles.iconContainer]}
          onPress={() => Navigation.goBack()}>
          <Icon name={iconRightName} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
