import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 140,
    height: 220,
    borderRadius: 5,
    margin: 20
  },
  title: {
    fontWeight: "bold",
    width: '70%'
  },
  image: {
    resizeMode: "contain",
    height: "70%"
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#000"
  },
  textContainer: {
    marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  bannerText: {
    color: "#fff",
    paddingHorizontal: 10,
  },
  bannerContainer: {
    borderRadius: 4,
    backgroundColor: "#2751B9",
  }
});
