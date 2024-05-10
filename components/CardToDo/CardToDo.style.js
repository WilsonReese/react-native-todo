import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    height: 115,
    backgroundColor: "white",
    // borderColorColor: "black",
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    alignItems: "center",
  },

  title: {
    fontSize: 25,
  },

  checkmark: {},
});
