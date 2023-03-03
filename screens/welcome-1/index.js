import React from "react";
import { Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Welcome1 = () => {
  return <ImageBackground style={styles.container} source={require("./assets/background.png")} imageStyle={styles.background}>
      <Text style={styles.heading}>Welcome Home</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at sed.
      </Text>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
    justifyContent: "flex-end"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    color: "#888888",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 60,
    marginTop: 100
  },
  button: {
    flex: 1,
    marginHorizontal: 10
  },
  background: {
    resizeMode: "contain",
    top: -100,
    left: 0,
    right: 0,
    position: "absolute"
  }
});
export default Welcome1;