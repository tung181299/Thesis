import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import MainHeader from '../../components/header/MainHeader';
import styles from './styles';
import {useState} from 'react';
var _ = require('lodash');
import * as TextStyle from '../../common/text';
import {request_get_products, logout, request_get_products_in_cart} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../components/Loading';
import {formatVND} from '../../utils/currency';
import {handleText} from '../../utils/text';
import * as Navigation from '../../navigation/RootNavigation'

export default function Home({navigation: {navigate}}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector(state => state.productReducer);
  const {user} = useSelector(state => state.authReducers);
  let optionAll = [{brand: "All"}];

  useEffect(() => {
    if (data && data.length == 0) {
      dispatch(request_get_products({brand: selectedCategory, type: ""}));
    }
    let category = _.uniqBy(data, 'brand').map(({ brand }) => ({brand}));
    setCategory(optionAll.concat(category));

    // setSelectedCategory(category && category[0] ? category[0].brand : null);
    // let products = _.filter(data, {brand: category && category[0] ? category[0].brand : null});
    setProducts(data);
    // get cart
    dispatch(request_get_products_in_cart(user.userId));
  }, [data]);

  const onSelectCategory = category => {
    console.log('onselect category: ', category);
    setSelectedCategory(category);
    if(category === "All") {
      setProducts(data);
    } else {
      let products = _.filter(data, {brand: category});
      setProducts(products);
    }
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={[
          item.brand == selectedCategory
            ? styles.activeCategoryBtn
            : styles.inactiveCategoryBtn,
          item.brand == selectedCategory
            ? styles.activeShadow
            : styles.inactiveShadow,
        ]}
        onPress={() => onSelectCategory(item.brand)}>
        <View>
          <Text
            style={[
              styles.categoryTxt,
              item.brand == selectedCategory
                ? styles.activeCategoryTxt
                : styles.inactiveCategoryTxt,
            ]}>
            {item.brand}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const goToProductDetail = product => {
    navigate('Product Detail', {product: product});
  };

  const renderItemProduct = item => {
    return (
      <TouchableOpacity
        style={[styles.productItem]}
        onPress={() => goToProductDetail(item)}>
        <View style={styles.productContainer}>
          <Image source={{uri: item.images[0]}} style={styles.productImage} />
          <Text
            style={[TextStyle.bold, styles.productName]}
            numberOfLines={3}
            ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={[TextStyle.medium, styles.price]}>
            {formatVND(item.price, 'VND')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const seeMore = () => {
    navigate('See More', {products: products, brand: selectedCategory});
  };

  console.log('currentUser from store: ', user);

  return (
    <View style={styles.main}>
      <MainHeader />
      {/* Categories List */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <FlatList
            data={category}
            renderItem={({item, index}) => renderItem(item)}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{margin: 10, padding: 5}}
            style={{flexGrow: 0}}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.container}>
            {/* Hot products title */}
            <View style={styles.hotContainer}>
              <Text style={[TextStyle.bold, styles.hotTxt]}>Hot Products</Text>
              <TouchableOpacity onPress={() => seeMore()}>
                <Text style={[TextStyle.bold]}>See More</Text>
              </TouchableOpacity>
            </View>
            {/* Hot products list */}
            <FlatList
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={products && products.slice(0,10)}
              numColumns={2}
              renderItem={({item}) => renderItemProduct(item)}
              contentContainerStyle={{margin: 5, padding: 5, paddingBottom: 20}}
              style={{flexGrow: 0}}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </View>
  );
}
