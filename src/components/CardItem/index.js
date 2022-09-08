import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {formatVND} from '../../utils/currency'

const moveToDetail = (item, navigate) => {
  navigate('Product Detail', {product: item})
}

const CardItem = ({ item, navigate }) => (
  <TouchableOpacity style={styles.item} onPress={() => moveToDetail(item, navigate)}>
    <View style={styles.dFlexStart}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: item.images[0],
        }}
      />
      <View>
        <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
      </View>
    </View>
    <View style={styles.horizontalLine} />
    <View style={styles.dFlexBetween}>
      <Text style={styles.textBold}>{formatVND(item.price, 'VND')}</Text>
      <TouchableOpacity style={styles.iconCart}>
        <Ionicons name="cart-outline" size={27} color={'#fff'}/>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default CardItem;