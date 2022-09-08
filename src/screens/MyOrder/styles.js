import { Dimensions, StyleSheet } from 'react-native'
import * as Colors from '../../constants/colors'

const width = Dimensions.get("window").width

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.PRIMARY,
    flex: 1
  },
  itemContainer: {
    flexDirection: "row",
    elevation: 5,
    backgroundColor: '#D2E2F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10
  },
  itemRightBox: {
    width: width - 135,
    paddingHorizontal: 5,
  },
  text: {
    marginVertical: 2
  },
  statusText: {
    marginVertical: 2,
    color: "#d86a20"
  },
  empty: {
    fontSize: 20,
    marginTop: 30,
    textAlign: "center"
  }
})

export default styles;