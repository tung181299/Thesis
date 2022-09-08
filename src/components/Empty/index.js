import { Text, View } from 'react-native';
import styles from './styles';
import React from 'react'

export default function EmptyDataView() {
  return (
    <View style={styles.container}>
      <View style={styles.layoutEmpty}>
        <Text style={styles.textEmpty}>Your data is empty.</Text>
      </View>
    </View>
  );
}