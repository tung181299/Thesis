import { StyleSheet, Dimensions  } from 'react-native';

const w = Dimensions.get("window").width;
const titleW = w - 92; // paddingHori: 16x2+30x2

 const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e3edf7",
    height: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    color: "#31456A",
    width: titleW,
    textAlign: "center"
  },
  iconContainer: {
    borderWidth: 1,
    width: 30,
    borderRadius: 5
  }
});

export default styles;
