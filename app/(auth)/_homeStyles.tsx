import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#F4F7FA",
    },
    horizontalScroll: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    separator: {
        height: 50,
        width: 1,
        backgroundColor: "#000"
    },
    discountImageContainer: {
        paddingHorizontal: 20
    },
    discountImage: {
        resizeMode: "stretch",
        width: "100%"
    },
    fedexImage: {
        resizeMode: "stretch",
        width: "100%",
    },
    icoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ico: {
        resizeMode: "stretch",
        width: 30
    },
    icoText: {
        fontSize: 20
    },
    paymentMethodContainer: {
        marginTop: 30,
        padding: 30
    },
    paymentMethodsHorizontalContainer: {
        flexDirection: 'row',
        height: 100,
        padding: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    seeAllButton: {
        fontWeight: 'bold',
        color: '#076CE0',
        paddingBottom: 21,
        paddingTop: 16,
        textAlign: "center",
        fontSize: 17
    },
    header: {
        height: 60,
        width: "100%",
    }
});