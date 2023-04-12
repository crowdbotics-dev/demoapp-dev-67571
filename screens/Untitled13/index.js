import { FlatList } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled13 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.lSMvRGaH}><ImageBackground style={styles.ZiSFewtP} source={require("./image.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.ZhjfqMuN} source={require("./image (1).png")} resizeMode="cover"></ImageBackground><Text style={styles.owBTGdbI}>Hello Rohan!</Text><Text style={styles.pTwKjydu}>Have a nice day.</Text><View style={styles.KkaCKnMr}></View><View style={styles.ADEyNNKG}></View><View style={styles.iWCXvfgh}></View><Text style={styles.XELVIISk}>My tasks</Text><Text style={styles.BhbVIXXU}>In Progress</Text><Text style={styles.pPqCHWPE}>Completed</Text><FlatList style={styles.EzjCgliZ} renderItem={({
        item
      }) => <View style={styles.OTxathmV}></View>} data={[1, 2]} keyExtractor={(item, index) => index} horizontal={true} ItemSeparatorComponent={() => <View style={styles.wOxVmZVP} />}></FlatList></ScrollView>
    <FlatList renderItem={({
      item
    }) => {}} ItemSeparatorComponent={() => {}} data={[1, 2, 3]} keyExtractor={(item, index) => index} style={styles.OYVQvrJv}></FlatList></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lSMvRGaH: {
    backgroundColor: "#F2F5FF"
  },
  ZiSFewtP: {
    width: 30,
    height: 30,
    left: 10,
    top: 10,
    position: "absolute"
  },
  ZhjfqMuN: {
    width: 30,
    height: 30,
    top: 10,
    left: 310,
    position: "absolute"
  },
  owBTGdbI: {
    width: 150,
    height: 14,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "left",
    position: "relative",
    flexDirection: "row",
    flex: 0,
    letterSpacing: 0,
    left: 20,
    top: 67,
    fontWeight: "700"
  },
  jSlANpgQ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  fwZPrjAS: {
    width: 150,
    height: 14,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "left",
    position: "relative",
    flexDirection: "row",
    flex: 0,
    letterSpacing: 0,
    left: 20,
    top: 67,
    fontWeight: "700"
  },
  pQSMLPKg: {
    width: 150,
    height: 14,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "left",
    position: "relative",
    flexDirection: "row",
    flex: 0,
    letterSpacing: 0,
    left: 20,
    top: 67,
    fontWeight: "700"
  },
  ohOdzHED: {
    width: 150,
    height: 14,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "left",
    position: "relative",
    flexDirection: "row",
    flex: 0,
    letterSpacing: 0,
    left: 20,
    top: 67,
    fontWeight: "700"
  },
  MNbbugky: {
    width: 95,
    height: 14,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    left: 20,
    top: 100,
    flexDirection: "row",
    flex: 0,
    alignItems: "start"
  },
  pTwKjydu: {
    width: 110,
    height: 18,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    left: 34,
    top: 100,
    position: "absolute",
    color: "#2E3A59",
    opacity: 0.54
  },
  HyoUsyHR: {
    width: 150,
    height: 14,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "left",
    position: "relative",
    flexDirection: "row",
    flex: 0,
    letterSpacing: 0,
    left: 20,
    top: 67,
    fontWeight: "700"
  },
  aoskDxdt: {
    width: 150,
    height: 14,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "left",
    position: "relative",
    flexDirection: "row",
    flex: 0,
    letterSpacing: 0,
    left: 20,
    top: 67,
    fontWeight: "700"
  },
  KkaCKnMr: {
    height: 37,
    width: 90,
    backgroundColor: "#fffdfd",
    borderRadius: 20,
    color: "#777777",
    position: "absolute",
    top: 134,
    left: 34,
    transform: [{
      rotate: "0deg"
    }],
    borderWidth: 0
  },
  ADEyNNKG: {
    height: 37,
    width: 90,
    backgroundColor: "#E5EAFC",
    borderRadius: 20,
    color: "#777777",
    position: "absolute",
    top: 135,
    left: 137
  },
  iWCXvfgh: {
    height: 37,
    width: 90,
    backgroundColor: "#E5EAFC",
    borderRadius: 20,
    color: "#777777",
    position: "absolute",
    top: 135,
    left: 240
  },
  XELVIISk: {
    width: 56,
    height: 22,
    lineHeight: 14,
    fontSize: 11,
    borderRadius: 0,
    position: "absolute",
    top: 146,
    left: 56
  },
  BhbVIXXU: {
    width: 76,
    height: 24,
    lineHeight: 14,
    fontSize: 11,
    borderRadius: 0,
    position: "absolute",
    top: 147,
    left: 155
  },
  pPqCHWPE: {
    width: 100,
    height: 18,
    lineHeight: 14,
    fontSize: 11,
    borderRadius: 0,
    position: "absolute",
    top: 147,
    left: 260
  },
  sAATKxHh: {
    position: "absolute",
    width: 277,
    height: 160,
    left: 29,
    top: 207,
    backgroundColor: "#c3aeae"
  },
  OvOVKveS: {
    width: 67,
    height: 60,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: 9,
    left: 11
  },
  fhHFnAuZ: {
    backgroundColor: "#000000",
    height: 1
  },
  RZiLwyYd: {
    backgroundColor: "#000000",
    height: 1
  },
  EzjCgliZ: {
    position: "absolute",
    width: "110%",
    height: 131,
    backgroundColor: "#F2F5FF",
    left: 24,
    top: 208
  },
  OTxathmV: {
    width: 151,
    height: 130,
    backgroundColor: "#FFFFFF",
    transform: [{
      rotate: "0deg"
    }],
    top: 1,
    left: 0,
    position: "relative",
    borderRadius: 20
  },
  SktcesCJ: {
    backgroundColor: "#000000",
    height: 1
  },
  wOxVmZVP: {
    backgroundColor: "#000000",
    height: 1
  },
  OYVQvrJv: {
    position: "absolute",
    width: 100,
    height: 150
  },
  ScrykFjx: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  NbKemGRb: {
    backgroundColor: "#000000",
    height: 1
  },
  vZhIuwuQ: {
    position: "absolute",
    width: 100,
    height: 150
  },
  CPzUOZsk: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  RqCFnqYa: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled13;