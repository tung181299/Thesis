import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
  },
  image: {
    width: width,
    height: width,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  dot: {
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#31456A',
  },
  inactiveDot: {
    width: 10,
    height: 10,
  }
});

export default styles;
