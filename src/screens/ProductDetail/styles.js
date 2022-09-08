import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e3edf7",
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  content: {
    margin: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "800"
  },
  order: {
    width: width,
    position: "absolute",
    bottom: -8,
    backgroundColor: "#31456A",
    height: 60,
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  price: {
    color: "#e3edf7",
    fontSize: 16,
    justifyContent: "flex-start"
  },
  buynow: {
    color: "#e3edf7",
    fontSize: 11
  },
  quantity: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  cartContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: "#e3edf7",
    marginHorizontal: 5
  },
  scrollView: {
    marginBottom: 60
  }
});

export default styles;
