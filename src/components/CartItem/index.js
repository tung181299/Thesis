import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {request_edit_product_in_cart, request_delete_product_in_cart} from '../../redux/actions/index';
import Storage from '@react-native-async-storage/async-storage';
import {formatVND} from '../../utils/currency'

export default function CartItem({item, navigate}) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [userId, setUserId] = useState(null);
  const {user} = useSelector(state => state.authReducers);
  const dispatch = useDispatch();

  const moveToDetail = (item, navigate) => {
    navigate('BuyNow', {product: item, quantity: item.quantity.toString(), page: 'cart'});
  };

  const getUser = async () => {
    const valueString = await Storage.getItem('currentUser');
    const value = JSON.parse(valueString);
    setUserId(value.userId);
  };

  useEffect(() => {
    getUser();
  }, [])

  const editQuantity = (item, act) => {
    if (act === 'plus') {
      setQuantity(quantity + 1);
      dispatch(
        request_edit_product_in_cart({
          productId: item._id,
          userId: user.userId,
          quantity: quantity + 1,
        }),
      );
    } else {
      if (quantity === 1) {
        setQuantity(1);
      } else {
        setQuantity(quantity - 1);
        dispatch(
          request_edit_product_in_cart({
            productId: item._id,
            userId: user.userId,
            quantity: quantity - 1,
          }),
        );
      }
    }
  };

  const removeProductInCart = (item) => {
    dispatch(request_delete_product_in_cart({cartId: item._id, userId: userId}));
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => moveToDetail(item, navigate)}>
      <View style={styles.dFlexBetween}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.productInfo}>
          <Text style={styles.title} numberOfLines={2}>
            {item.productName}
          </Text>
          <Text style={styles.brand}>{item.productBrand}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconCart} onPress={() => removeProductInCart(item)}>
            <Icon name="delete" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dFlexBetween}>
        <Text style={styles.textBold}>{formatVND(item.price, 'VND')}</Text>
        <View style={styles.quantityView}>
          <TouchableOpacity
            style={styles.btnAct}
            onPress={() => editQuantity(item, 'minus')}>
            <Text style={{fontSize: 26, marginTop: -5}}> - </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18, marginTop: 2}}> {quantity} </Text>
          <TouchableOpacity
            style={styles.btnAct}
            onPress={() => editQuantity(item, 'plus')}>
            <Text style={{fontSize: 26, marginTop: -3}}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// export default CartItem;
