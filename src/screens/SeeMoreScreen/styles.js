import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EDF7',
    // color: '#31456A',
  },
  dFlexStart: {
    flex: 1,
    marginTop: 40,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  dFlexBetween: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -20
  },
  option: {
    width: 55,
    height: 30,
    backgroundColor: "#ccd9e6",
    marginTop: 18,
    marginLeft: 10,
    borderRadius: 5,
    paddingTop: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  optionAct: {
    backgroundColor: "#8ac4d1",
    borderWidth: 0.5,
    borderColor: '#016080'
  },
  txtWhite: {
    color: '#6f7273',
    fontWeight: "600"
  },
  txtGreen: {
    color: '#105703',
    fontWeight: "600"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    width: w * 0.8,
    borderRadius: 20,
    borderColor: "#84a2bf",
    shadowColor: "#afc7de",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  btnSearch: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#ccd9e6',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9,
    // marginLeft: -20
    marginRight: 10
  },
  listItems: {
    marginTop: 60
  },
  loading: {
    marginTop: -(h * 0.45),
  },
  viewProducts: {
    flex: 1,
    marginTop: -(h * 0.77),
  },
  noResults: {
    width: "100%",
    alignItems: "center",
    marginTop: 100,
  },
  txtNoResults: {
    fontSize: 18,
    marginTop: -(h * 0.65),
  }
});

export default styles;