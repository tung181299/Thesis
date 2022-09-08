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
import {isRequired} from '../../../utils/validation';
import * as Navigation from '../../../navigation/RootNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from '../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '../../../redux/actions/index';
import {DotIndicator} from 'react-native-indicators';
import * as TextStyle from '../../../common/text';
import Storage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const dispatch = useDispatch();
  const {loading, error, user} = useSelector(state => state.authReducers);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const valueString = await Storage.getItem('currentUser');
      const value = JSON.parse(valueString);
      console.log('currentUser Loginscreen: ', value);
      if (value != null) {
        Navigation.replace('Main');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeText = field => {
    return text => {
      switch (field) {
        case 'username': {
          setUserName(text.trim());
          setUsernameError(isRequired(text) ? null : 'Enter your username');
          break;
        }
        case 'password': {
          setPassword(text.trim());
          setPasswordError(isRequired(text) ? null : 'Enter your password');
          break;
        }
      }
    };
  };

  const validateData = () => {
    if (isRequired(password) && isRequired(username)) {
      login();
    }
    setUsernameError(isRequired(username) ? null : 'Enter your username');
    setPasswordError(isRequired(password) ? null : 'Enter your password');
  };

  const login = () => {
    dispatch(loginRequest(username, password));
  };

  const signUp = () => {
    Navigation.navigate('SignUp');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{backgroundColor: '#fff', flexGrow: 1}}>
          <View style={styles.header}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.imageHeader}
            />
          </View>
          <View style={styles.body}>
            <View style={{alignItems: 'center', marginVertical: 8}}>
              <Text style={[styles.headerTextLarge, TextStyle.bold]}>
                Login
              </Text>
              <Text style={[styles.headerTextSmall, TextStyle.bold]}>
                Please sign in to continue.
              </Text>
            </View>
            <TextInput
              label="Email or Phone"
              onChangeText={handleChangeText('username')}
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
              value={username}
            />
            {usernameError !== null && (
              <Text style={[styles.errorText, TextStyle.medium]}>
                {usernameError}
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
            <LinearGradient
              colors={[Colors.SECONDARY, '#94B627']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginTextContainer}
                onPress={() => validateData()}>
                <Text style={[styles.loginText, TextStyle.bold]}>LOGIN</Text>
                {loading && <DotIndicator color="#fff" size={5} />}
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              style={{marginVertical: 16}}
              onPress={() => signUp()}>
              <Text style={[{color: '#686868'}, TextStyle.medium]}>
                Don't have an account?{' '}
                <Text style={[styles.signUpText, TextStyle.bold]}>
                  Sign Up Now
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
