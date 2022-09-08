import { Dimensions, StyleSheet } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EDF7',
  },
  bgImg: {
    width: w,
    height: 250,
  },
  avtView: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginTop: -50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  avtImg: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  dFlexBetween: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 16
  },
  viewInfo: {
    width: w - 165,
    height: 180,
    borderRadius: 10,
    backgroundColor: '#E3EDF7',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    marginLeft: 5,
    marginTop: 20,
    padding: 10,
  },
  info: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#036d9e',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  bottomView1: {
    width: '100%',
    height: 50,
    backgroundColor: '#036d9e',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 55, //Here is the trick
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff"
  },
  iconEdit: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#84a2bf",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    marginTop: -60,
    marginLeft: 100
  },

  emptyView: {
    width: w,
    height: h * 0.4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: w,
    height: h * 0.6,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 18,
    fontWeight: "600"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    width: w * 0.75,
    borderRadius: 10,
    borderColor: "#84a2bf",
  },
  myOrders: {
    width: "80%",
    height: 40,
    backgroundColor: "#37b053",
    marginLeft: "10%",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  txtMyOrders: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginTop: 5
  },
  loading: {
    marginTop: 55
  }
});

export default styles;
