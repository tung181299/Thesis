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
import {
  isRequired,
  isPhoneNum,
  isEmail,
} from '../../../utils/validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from '../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {signUpRequest} from '../../../redux/actions/index';
import {DotIndicator} from 'react-native-indicators';
import * as TextStyle from '../../../common/text';

export default function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmError, setConfirmError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const dispatch = useDispatch();
  const {loading, error } = useSelector(state => state.signUpReducers);

  useEffect(() => {}, []);

  const handleChangeText = field => {
    return text => {
      switch (field) {
        case 'name': {
          setName(text.trim());
          setNameError(isRequired(text) ? null : 'Enter your name');
          break;
        }
        case 'password': {
          setPassword(text.trim());
          setPasswordError(isRequired(text) ? null : 'Enter your password');
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
        case 'confirm': {
          setConfirm(text.trim());
          setConfirmError(
            isRequired(text)
              ? text.trim() !== password
                ? 'Password do not match'
                : ''
              : 'Enter your confirm password',
          );
          break;
        }
      }
    };
  };

  const validateData = () => {
    if (
      isRequired(password) &&
      isRequired(name) &&
      isEmail(email) &&
      isPhoneNum(phone) &&
      isRequired(confirm) &&
      password === confirm
    ) {
      signUp();
    }
    setNameError(isRequired(name) ? null : 'Enter your name');
    setPasswordError(isRequired(password) ? null : 'Enter your password');
    setPhoneError(isPhoneNum(phone) ? null : 'Enter a valid phone');
    setEmailError(isEmail(email) ? null : 'Enter a valid email address');
    setConfirmError(
      isRequired(confirm)
        ? confirm.trim() !== password
          ? 'Password do not match'
          : ''
        : 'Enter your confirm password',
    );
  };

  const signUp = () => {
    dispatch(signUpRequest(name, phone, email, password));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{backgroundColor: '#fff', flexGrow: 1}}>
          {/* <View style={styles.header}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.imageHeader}
            />
          </View> */}
          <View style={styles.body}>
            <View style={{alignItems: 'center', marginVertical: 8}}>
              <Text style={[styles.headerTextLarge, TextStyle.bold]}>
                Sign Up
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
              label="Password"
              onChangeText={handleChangeText('password')}
              mode="outlined"
              style={[styles.inputText, {textTransform: 'lowercase'}]}
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={true}
              theme={{
                colors: {
                  primary: Colors.SECONDARY,
                  underlineColor: 'transparent',
                },
              }}
              dense={true}
              value={password}
            />
            {passwordError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {passwordError}
              </Text>
            )}
            <TextInput
              label="Confirm"
              onChangeText={handleChangeText('confirm')}
              mode="outlined"
              style={[styles.inputText, {textTransform: 'lowercase'}]}
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={true}
              theme={{
                colors: {
                  primary: Colors.SECONDARY,
                  underlineColor: 'transparent',
                },
              }}
              dense={true}
              value={confirm}
            />
            {confirmError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {confirmError}
              </Text>
            )}
            <LinearGradient
              colors={[Colors.SECONDARY, '#94B627']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginTextContainer}
                onPress={() => validateData()}>
                <Text style={[styles.loginText, TextStyle.bold]}>SignUp</Text>
                {loading && <DotIndicator color="#fff" size={5} />}
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
