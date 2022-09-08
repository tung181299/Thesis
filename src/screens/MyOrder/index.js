import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback, Image, TouchableOpacity} from 'react-native';
import Header from '../../components/header/Header/index';
import styles from './styles';
import Loading from '../../components/Loading/index';
import {useSelector, useDispatch} from 'react-redux';
import {request_get_orders} from '../../redux/actions/index';
import EmptyDataView from '../../components/Empty';
import * as TextStyle from '../../common/text';
import Moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

export default function MyOrder() {
  const {data, loading, error} = useSelector(state => state.orderReducers);
  const {user} = useSelector(state => state.authReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request_get_orders(user.userId));
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(request_get_orders(user.userId));
    }, [])
  );

  const getStatus = number => {
    switch (number) {
      case 1:
        return 'Pending';
      case 2:
        return 'Processing';
      case 3:
        return 'Shipping';
      case 4:
        return 'Delivered';
      default:
        return 'Unknown';
    }
  };

  const isoToMonthDate = value => {
    Moment.locale('en');
    let time = Moment(value).format('MMM D YYYY');
    return time;
  };

  const renderOrderItem = item => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.productImage}} style={styles.image} />
          <View style={styles.itemRightBox}>
            <Text
              style={[TextStyle.medium, styles.text]}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.productName}
            </Text>
            <Text style={[TextStyle.medium, styles.text]}>
              Quantity: {item.quantity}
            </Text>
            <Text style={[TextStyle.medium, styles.text]}>
              Status:{' '}
              <Text style={[TextStyle.medium, styles.statusText]}>
                {getStatus(item.orderStatus)}
              </Text>
            </Text>
            <Text style={[TextStyle.medium, styles.text]}>
              Order date: {isoToMonthDate(item.createdAt)}
            </Text>
            <Text style={[TextStyle.medium, styles.text]}>
              Address: {item.address}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.main}>
      <Header title="My orders" />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => renderOrderItem(item)}
          keyExtractor={item => item.id}
          contentContainerStyle={{margin: 10, padding: 5}}
          style={{flexGrow: 0}}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<EmptyDataView />}
        />
      )}
      {data.lenght === 0 &&
        <Text style={styles.empty}>Your order list is empty!</Text>
      }
    </View>
  );
}
