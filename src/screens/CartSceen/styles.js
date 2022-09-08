import { Dimensions, StyleSheet } from 'react-native';

const w = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EDF7',
    paddingTop: 10
  },
  dFlexStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 16
  },
  txtCart: {
    marginLeft: 5,
    marginTop: 2,
    fontWeight: "600"
  },
  horizontalLine: {
    width: "100%",
    borderTopWidth: 0.5,
    borderTopColor: "gray",
    marginVertical: 10,
  },
  listItems: {
    marginTop: 5
  },
  empty: {
    fontSize: 20,
    marginTop: 30,
    textAlign: "center"
  }
});

export default styles;
