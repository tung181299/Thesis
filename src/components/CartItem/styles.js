import {
    StyleSheet,
    Dimensions
} from 'react-native';
const w = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    dFlexStart: {
        flex: 1,
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
        justifyContent: "space-around"
    },
    item: {
        backgroundColor: '#E3EDF7',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderRadius: 10
    },
    thumbnail: {
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 18,
        marginLeft: -30,
        fontWeight: '700'
    },
    brand: {
        fontSize: 18,
        marginLeft: -30,
        color: '#000000',
        fontWeight: '500'
    },
    horizontalLine: {
        width: "100%",
        borderTopWidth: 0.5,
        borderTopColor: "gray",
        marginVertical: 10,
    },
    textBold: {
        fontWeight: "800",
        fontSize: 16,
        marginTop: 15,
        color: "#039114"
    },
    iconCart: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#e46299",
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
    },
    productInfo: {
        width: 110
    },
    btnAct: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#cbe1f7",
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
    },
    quantityView: {
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
});

export default styles;