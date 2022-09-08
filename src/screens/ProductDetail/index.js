import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/header/Header';
import styles from './styles';
import CarouselCustom from '../../components/carousel';
import * as TextStyle from '../../common/text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatVND} from '../../utils/currency';
import {handleText} from '../../utils/text';
import {
  request_add_product_to_cart,
  request_get_products_in_cart,
} from '../../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
import * as Navigation from '../../navigation/RootNavigation';

function ProductDetailScreen(props) {
  const {product} = props.route.params;
  const {user} = useSelector(state => state.authReducers);
  const {loading} = useSelector(state => state.cartReducers);

  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(
      request_add_product_to_cart({
        productId: product._id,
        userId: user.userId,
        productName: product.name,
        productBrand: product.brand,
        image: product.images[0],
        price: product.price,
        quantity: 1,
      }),
    );
  };

  const onBuyNow = () => {
    Navigation.navigate('BuyNow', {product: product, quantity: '1', page: 'productDetail'});
  };

  return (
    <View style={styles.main}>
      <Header title="Details" />
      <View style={styles.container}>
        <View style={styles.scrollView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <CarouselCustom data={product?.images} />
              <View style={styles.content}>
                <Text style={[TextStyle.bold, styles.productName]}>
                  {product.name}
                </Text>
                <Text style={[TextStyle.bold]}>Information: </Text>
                {handleText(product.information)}
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.order}>
          <Text style={[TextStyle.medium, [styles.price]]}>
            {formatVND(product.price, 'VND')}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.cartContainer}
              onPress={() => (loading ? null : onAddToCart())}>
              <Icon size={24} name="cart-plus" color="#e3edf7" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cartContainer}
              onPress={() => onBuyNow()}>
              <Text style={[TextStyle.medium, styles.buynow]}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProductDetailScreen;
