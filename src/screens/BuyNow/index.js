import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';
import {isRequired, isPhoneNum, isEmail} from '../../utils/validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {request_add_order} from '../../redux/actions/index';
import {DotIndicator} from 'react-native-indicators';
import * as TextStyle from '../../common/text';
import Header from '../../components/header/Header';
import {formatVND} from '../../utils/currency';

export default function BuyNow(props) {
  const {product} = props.route.params.product;
  const {user} = useSelector(state => state.authReducers);
  const [name, setName] = useState(user ? user.userName : null);
  const [address, setaddress] = useState('');
  const [quantity, setquantity] = useState(props.route.params.quantity);
  const [phone, setPhone] = useState(user ? user.phone : null);
  const [email, setEmail] = useState(user ? user.email : null);
  const [nameError, setNameError] = useState(null);
  const [addressError, setaddressError] = useState(null);
  const [quantityError, setquantityError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.orderReducers);

  useEffect(() => {}, []);

  const handleChangeText = field => {
    return text => {
      switch (field) {
        case 'name': {
          setName(text.trim());
          setNameError(isRequired(text) ? null : 'Enter your name');
          break;
        }
        case 'address': {
          setaddress(text.trim());
          setaddressError(isRequired(text) ? null : 'Enter your address');
          break;
        }
        case 'phone': {
          setPhone(text.trim());
          setPhoneError(isPhoneNum(text) ? null : 'Enter a valid phone');
          break;
        }
        case 'email': {
          setEmail(text.trim());
          setEmailError(isEmail(text) ? null : 'Enter a valid email address');
          break;
        }
        case 'quantity': {
          parseInt(text) < 1 ? setquantity('1') : setquantity(text);
          setquantityError(
            isRequired(text)
              ? typeof parseInt(text) != 'number'
                ? 'Enter a number'
                : ''
              : 'Enter your quantity address',
          );
          break;
        }
      }
    };
  };

  const validateData = () => {
    if (
      isRequired(address) &&
      isRequired(name) &&
      isEmail(email) &&
      isPhoneNum(phone) &&
      isRequired(quantity) &&
      typeof parseInt(quantity) == 'number'
    ) {
      onOrder();
    }
    setNameError(isRequired(name) ? null : 'Enter your name');
    setaddressError(isRequired(address) ? null : 'Enter your address');
    setPhoneError(isPhoneNum(phone) ? null : 'Enter a valid phone');
    setEmailError(isEmail(email) ? null : 'Enter a valid email address');
    setquantityError(
      isRequired(quantity)
        ? typeof parseInt(quantity) != 'number'
          ? 'Enter a number'
          : ''
        : 'Enter your quantity address',
    );
  };

  const onOrder = () => {
    const product = props.route.params.product
    const page = props.route.params.page
    const body = {
      customerName: name,
      phone,
      email,
      address,
      productId: page === 'cart' ? product.productId : product._id,
      productName: page === 'cart' ? product.productName : product.name,
      productBrand: page === 'cart' ? product.productBrand : product.brand,
      quantity,
      userId: user.userId,
      cartId: page === 'cart' ? product._id : null,
      productImage: page === 'cart' ? product.image : product.images[0]
    };
    console.log('body nenene: ', body);
    dispatch(request_add_order(body));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.main}>
        <Header />
        <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.body}>
            <View style={{alignItems: 'center', marginVertical: 8}}>
              <Text style={[styles.headerTextLarge, TextStyle.bold]}>
                Fill out the order
              </Text>
              <Text style={[styles.headerTextSmall, TextStyle.bold]}></Text>
            </View>
            <TextInput
              label="Name"
              onChangeText={handleChangeText('name')}
              mode="outlined"
              style={[styles.inputText, {textTransform: 'lowercase'}]}
              autoCapitalize="none"
              returnKeyType="next"
              theme={{
                colors: {
                  primary: Colors.SECONDARY,
                  underlineColor: 'transparent',
                },
              }}
              dense={true}
              autoCapitalize="none"
              value={name}
            />
            {nameError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {nameError}
              </Text>
            )}
            <TextInput
              label="Phone"
              onChangeText={handleChangeText('phone')}
              mode="outlined"
              style={[styles.inputText, {textTransform: 'lowercase'}]}
              autoCapitalize="none"
              returnKeyType="next"
              theme={{
                colors: {
                  primary: Colors.SECONDARY,
                  underlineColor: 'transparent',
                },
              }}
              dense={true}
              autoCapitalize="none"
              value={phone}
            />
            {phoneError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {phoneError}
              </Text>
            )}
            <TextInput
              label="Email"
              onChangeText={handleChangeText('email')}
              mode="outlined"
              style={[styles.inputText, {textTransform: 'lowercase'}]}
              autoCapitalize="none"
              returnKeyType="next"
              theme={{
                colors: {
                  primary: Colors.SECONDARY,
                  underlineColor: 'transparent',
                },
              }}
              dense={true}
              autoCapitalize="none"
              value={email}
            />
            {emailError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {emailError}
              </Text>
            )}
            <TextInput
              label="Address"
              onChangeText={handleChangeText('address')}
              mode="outlined"
              style={[styles.inputText]}
              autoCapitalize="none"
              returnKeyType="next"
              theme={{
                colors: {
                  primary: Colors.SECONDARY,
                  underlineColor: 'transparent',
                },
              }}
              dense={true}
              value={address}
            />
            {addressError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {addressError}
              </Text>
            )}
            <TextInput
              label="Quantity"
              onChangeText={handleChangeText('quantity')}
              mode="outlined"
              style={[styles.inputText, {textTransform: 'lowercase'}]}
              autoCapitalize="none"
              returnKeyType="next"
              theme={{
                colors: {
                  primary: Colors.SECONDARY,
                  underlineColor: 'transparent',
                },
              }}
              dense={true}
              value={quantity}
              keyboardType="numeric"
            />
            {quantityError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {quantityError}
              </Text>
            )}
            <Text style={[TextStyle.medium, styles.total]}>
              Total:
              {parseInt(quantity) > 0
                ? formatVND(parseInt(quantity) * props.route.params.product.price, ' VND')
                : formatVND(0, ' VND')}
            </Text>
            <LinearGradient
              colors={[Colors.SECONDARY, '#94B627']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginTextContainer}
                onPress={() => validateData()}>
                <Text style={[styles.loginText, TextStyle.bold]}>Order</Text>
                {loading && <DotIndicator color="#fff" size={5} />}
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
