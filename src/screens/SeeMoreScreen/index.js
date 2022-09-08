import React, { useState } from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import CardItem from '../../components/CardItem';
var _ = require('lodash');
import Header from '../../components/header/Header';

function SeeMoreScreen({ navigation: { navigate }, route }) {
  const listProducts = route.params.products;
  const brand = route.params.brand;
  const [name, setName] = useState('');
  const [type, setType] = useState(0);
  const [selectType, setselectType] = useState(0);
  const [products, setProducts] = useState(listProducts);

  const onChangeText = text => {
    setName(text);
  };

  const onSearch = () => {
    Keyboard.dismiss();
    let products = _.filter(listProducts, {
      type: type === 1 ? 'shoes' : type === 2 ? 'sandal' : type === 0 && '',
    });
    setProducts(
      products.filter(item =>
        item?.name?.toLowerCase()?.includes(name.toLowerCase()),
      ),
    );
  };

  const onSelectType = value => {
    setType(value);
    if (value === 1) {
      setselectType(1);
      let products = _.filter(listProducts, { type: 'shoes' });
      setProducts(
        products.filter(item =>
          item?.name?.toLowerCase()?.includes(name.toLowerCase()),
        ),
      );
    } else if (value === 2) {
      setselectType(2);
      let products = _.filter(listProducts, { type: 'sandal' });
      setProducts(
        products.filter(item =>
          item?.name?.toLowerCase()?.includes(name.toLowerCase()),
        ),
      );
    } else {
      setselectType(0);
      setProducts(listProducts);
    }
  };

  const renderItem = ({ item }) => <CardItem item={item} navigate={navigate} />;

  return (
    <View style={styles.container}>
      <Header title={brand === "All" ? "All brands" : !brand ? "All brands" : brand} />
      <View>
        <View style={styles.dFlex}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={name}
          />
          <TouchableOpacity style={styles.btnSearch} onPress={onSearch}>
            <Ionicons name="search" size={27} />
          </TouchableOpacity>
        </View>
        <View style={styles.dFlexStart}>
          <TouchableOpacity
            style={[styles.option, selectType === 0 && styles.optionAct]}
            onPress={() => {
              onSelectType(0);
            }}>
            <Text style={styles.txtWhite}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectType === 1 && styles.optionAct]}
            onPress={() => {
              onSelectType(1);
            }}>
            <Text style={styles.txtWhite}>Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectType === 2 && styles.optionAct]}
            onPress={() => {
              onSelectType(2);
            }}>
            <Text style={styles.txtWhite}>Sandals</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {products.length === 0 ? (
          <View style={styles.noResults}>
            <Text style={styles.txtNoResults}>No results</Text>
          </View>
        ) : (
          <View>
            <FlatList
              contentContainerStyle={{
                paddingTop: 5,
                paddingBottom: 100
              }}
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item._id}
              style={styles.listItems}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default SeeMoreScreen;
