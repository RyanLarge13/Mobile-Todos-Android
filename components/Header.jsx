import { Text, View, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 10,
    backgroundColor: "indigo",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    elevation: 20,
    borderRadius: 7.5,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    fontFamily: "serif"
  },
});

export default Header;
