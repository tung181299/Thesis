import {Dimensions, StyleSheet} from 'react-native';
import * as Colors from '../../../constants/colors';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

export default StyleSheet.create({
  header: {
    height: h * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHeader: {
    height: h * 0.3,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  errorText: {
    color: '#FF0000',
    width: w * 0.8,
    fontSize: 12,
  },
  inputText: {
    alignSelf: 'center',
    width: w * 0.8,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 16,
    width: w * 0.8,
    alignItems: 'center',
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
  },
  headerTextLarge: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.SECONDARY,
  },
  headerTextSmall: {
    fontSize: 14,
    color: '#808080',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
  },
  loginTextContainer: {width: '100%', flex: 1, justifyContent: 'center'},
  signUpText: {color: Colors.SECONDARY, fontWeight: '700'},
});
