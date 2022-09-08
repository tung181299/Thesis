import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function MainHeader() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        T-SHOES
      </Text>
    </View>
  )
}
