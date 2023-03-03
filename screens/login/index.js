import { Pressable } from "react-native";
import React from "react";
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
const deviceWidth = Dimensions.get("window").width;

const pressed = () => {
  console.log("pressed");
};

const LoginScreen = params => {
  return <View style={styles.container}>
      <View style={styles.topSection}>
        <Pressable onPress={{}}><Pressable onPress={() => {
          params.navigation.navigate("signup");
        }}><Text style={styles.headingTxt}>Sign In</Text></Pressable></Pressable>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomSectionText}>Welcome Back!</Text>
        <Pressable onPress={{}}><Pressable onPress={() => {
          params.navigation.navigate("forgotPassword");
        }}><Text style={styles.bottomSectionDescription}>
          Forgot Password
        </Text></Pressable></Pressable>
        <Button title={"SignUp"} navigation={params.navigation}></Button>
        <Button title={"Login"} btnStyle={styles.loginBtnStyle} textStyle={styles.loginBtnText} onPress={pressed} navigation={params.navigation}></Button>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  topSection: {
    flex: 1,
    alignItems: "center"
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center"
  },
  bottomSectionText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  bottomSectionDescription: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "400",
    maxWidth: deviceWidth / 1.4,
    textAlign: "center",
    padding: 5,
    marginVertical: 12
  },
  headingTxt: {
    fontWeight: "bold",
    color: "black",
    fontSize: 28
  },
  loginBtnStyle: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  },
  loginBtnText: {
    color: "black"
  }
});

const Button = ({
  navigation,
  title,
  btnStyle,
  textStyle,
  onPress
}) => {
  return <TouchableOpacity style={[btnStyles.btn, btnStyle]} onPress={onPress}>
      <Pressable onPress={{}}><Pressable onPress={() => {
        navigation.navigate("welcome1");
      }}><Text style={[btnStyles.btnText, textStyle]}>{title}</Text></Pressable></Pressable>
    </TouchableOpacity>;
};

const btnStyles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "black",
    borderRadius: 6,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: 5,
    width: deviceWidth - 80,
    minHeight: 45,
    marginVertical: 12
  },
  btnText: {
    color: "white"
  }
});
export default LoginScreen;