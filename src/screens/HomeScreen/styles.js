import {Dimensions, StyleSheet} from 'react-native';

const w = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E3EDF7',
  },
  container: {
    flex: 1,
    margin: 10,
  },
  activeCategoryBtn: {
    minWidth: 100,
    backgroundColor: '#D2E2F0',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  inactiveCategoryBtn: {
    minWidth: 100,
    backgroundColor: '#E3EDF7',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  activeShadow: {
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  inactiveShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 25,
    elevation: 5,
  },
  categoryTxt: {
    fontFamily: 'Montserrat-Bold',
    textTransform: 'capitalize',
  },
  activeCategoryTxt: {
    color: '#556887',
  },
  inactiveCategoryTxt: {
    color: '#A0AEC2',
  },
  hotTxt: {
    fontSize: 18,
  },
  hotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  },
  productItem: {
    width: w / 2,
    backgroundColor: '#E3EDF7',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    padding: 3,
    marginTop: 10,
  },
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    resizeMode: 'cover',
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: 'hidden',
  },
  productName: {
    fontSize: 13,
    textAlign: "center",
    color: "#3F5276",
    marginVertical: 2
  },
  price: {
    color: "#8594AD"
  }
});

export default styles;
