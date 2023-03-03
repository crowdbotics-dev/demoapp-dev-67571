import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const GettingStarted = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>

    <ImageBackground style={styles.coPBahvZ} source={require("./Get Started.png")} resizeMode="cover"><Pressable onPress={{}}><Pressable onPress={() => {
            navigation.navigate("login");
          }}><ImageBackground style={styles.mMfggrHP} source={require("./Buttons.png")} resizeMode="cover"></ImageBackground></Pressable></Pressable></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  rSmptqdo: {
    height: 106,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  GVdEmvKN: {
    width: 107,
    height: 62
  },
  rKWWKiBy: {
    width: 120,
    height: 70
  },
  MKxWIVYH: {
    width: 183,
    height: 69
  },
  GnTLTLzw: {
    width: 150,
    height: 40
  },
  coPBahvZ: {
    width: 350,
    height: 570,
    top: -11,
    left: -6
  },
  mMfggrHP: {
    width: 170,
    height: 80,
    top: 391,
    left: 90,
    position: "absolute"
  }
});
export default GettingStarted;