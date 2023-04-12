import { FlatList } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled13Copy = () => {
  return <SafeAreaView style={styles.safeArea} __uuid__="c629b7a7-c2ec-4c83-b7fc-8e52f6a90992">
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }} style={styles.lSMvRGaH} __uuid__="e67c9ad0-e1fc-4ac5-86a4-ece8df656509">
        <ImageBackground style={styles.ZiSFewtP} source={require("./image.png")} resizeMode="cover" __uuid__="f9ac6e55-1ac6-44eb-ba8f-01cffe19c09a"></ImageBackground>
        <ImageBackground style={styles.ZhjfqMuN} source={require("./image (1).png")} resizeMode="cover" __uuid__="fd5c3839-1597-4535-9ac9-bdfb8c58c304"></ImageBackground>
        <Text style={styles.owBTGdbI} __uuid__="014a93ce-5fa7-4fcf-ae33-4d8e06158911">Hello Rohan!</Text>
        <Text style={styles.pTwKjydu} __uuid__="703bb684-0fe2-44b4-8313-c61ffae39c06">Have a nice day.</Text>
        <View style={styles.KkaCKnMr} __uuid__="3aaaa338-1683-427c-ab5b-466319f4bcf8"></View>
        <View style={styles.ADEyNNKG} __uuid__="1151bab8-6ed0-4f43-ad31-30d4caae33c4"></View>
        <View style={styles.iWCXvfgh} __uuid__="f1bfb093-2445-4508-863a-7db09e4582c7"></View>
        <Text style={styles.XELVIISk} __uuid__="96c81065-5e18-49c0-94d0-e210ff75eb2e">My tasks</Text>
        <Text style={styles.BhbVIXXU} __uuid__="b01a0c9b-f305-4b68-8da2-fa23cbdb43cc">In Progress</Text>
        <Text style={styles.pPqCHWPE} __uuid__="70ff765c-21cf-41be-ba79-0767cca18457">Completed</Text>
        <FlatList style={styles.EzjCgliZ} renderItem={({
        item
      }) => <View style={styles.OTxathmV} __uuid__="2148ace1-4dc1-4cfd-9d4e-e7f70a6e92d3">
              <ImageBackground style={styles.qfxZibtA} source={require("./image (2).png")} resizeMode="cover" __uuid__="4aa0b4b3-df6c-40cb-ac0c-8b829c484337"></ImageBackground>
              <Text style={styles.UHHiKFrx} __uuid__="9a0fbdc3-e045-4abe-a227-4b94f2c7006b">Project 1</Text>
              <Text style={styles.UbYIwlkj} __uuid__="1c567011-9e14-4242-8db4-89ce869cf3ae">Front-end Development</Text>
              <Text style={styles.esNRZJXj} __uuid__="332bafc7-f64c-4ead-8029-5319f19e9852">October 20, 2020</Text>
            </View>} data={[1, 2]} keyExtractor={(item, index) => index} horizontal={true} ItemSeparatorComponent={() => <View style={styles.wOxVmZVP} __uuid__="d87e467f-dc94-4d4b-85fc-da3e6964217c" />} __uuid__="9133c294-4cd9-431e-b2b3-67612dd14c94"></FlatList>
        <Text style={styles.TCqAuTQQ} __uuid__="590ccba2-ae25-4d70-bfbc-c52677d41784">Progress</Text>
        <View style={styles.zTuPphOO} __uuid__="250bb8b3-b272-44ea-bac2-1c9bec4ac81b"></View>
        <View style={styles.WlkTlwXz} __uuid__="db89516a-8bf8-4c19-9f96-7654817fcbaf"></View>
        <View style={styles.temjfMrx} __uuid__="89aee4cc-adc1-4047-a31d-b65079bf4e86"></View>
        <FlatList style={styles.RYKlDJyx} renderItem={({
        item
      }) => <View style={styles.BFDjmCWv} __uuid__="ef2d4a81-80f2-4d69-8729-d450936d2499">
              <Text style={styles.sutUwBSW} __uuid__="2f922dd4-0f2b-43a6-99ce-70599201af8e">Design Changes</Text>
              <Text style={styles.fqDKswZG} __uuid__="cceccad4-6e75-4a13-9a66-47d79e25416f">2 Days ago</Text>
            </View>} ItemSeparatorComponent={() => <View style={styles.XLfsDlsk} __uuid__="faa62a46-9192-46f1-a443-a55616e56d14" />} data={[1, 2]} keyExtractor={(item, index) => index} __uuid__="9a265b5b-7294-497b-b734-366283b1d7c3"></FlatList>
        <ImageBackground style={styles.qNgZcNnU} source={require("./image (5).png")} resizeMode="cover" __uuid__="6096a0ab-2656-491c-8874-2bcd0ce2cd60"></ImageBackground>
        <View style={styles.YuoLApMp} __uuid__="7e3d25a0-6c42-4a47-b8e7-5a7ef77f0d47">
          <ImageBackground style={styles.QDVCjZjd} source={require("./image (6).png")} resizeMode="cover" __uuid__="7e31ca6e-4667-4f49-b625-4351a289ae5b"></ImageBackground>
          <ImageBackground style={styles.ZFRHMATn} source={require("./image (7).png")} resizeMode="cover" __uuid__="7f956399-9b6d-4471-a7a1-9db90dfe99e6"></ImageBackground>
          <ImageBackground style={styles.nUrAGqxk} source={require("./image (8).png")} resizeMode="cover" __uuid__="bfaa47ff-76a8-4d12-9ab4-0c703ddaeba6"></ImageBackground>
          <ImageBackground style={styles.kjzBusLi} source={require("./image (9).png")} resizeMode="cover" __uuid__="16aee826-d7d4-429d-96ed-3f9657693baa"></ImageBackground>
        </View>
      </ScrollView>
      <ImageBackground style={styles.ZrGESAzM} source={require("./image (5).png")} resizeMode="cover" __uuid__="75960e6a-9831-4972-8e33-a4be30a5f75d"></ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
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
    height: 150,
    backgroundColor: "#F2F5FF",
    left: 38,
    top: 192
  },
  OTxathmV: {
    width: 170,
    height: 150,
    backgroundColor: "#3349a3",
    transform: [{
      rotate: "0deg"
    }],
    top: 0,
    left: 0,
    position: "relative",
    borderRadius: 20
  },
  SktcesCJ: {
    backgroundColor: "#000000",
    height: 1
  },
  wOxVmZVP: {
    height: 1,
    width: 20
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
  },
  DoIskKzg: {
    width: 160,
    height: 143,
    position: "absolute",
    top: 213,
    left: 27
  },
  qfxZibtA: {
    width: 28,
    height: 26,
    position: "absolute",
    top: 12,
    left: 16
  },
  UHHiKFrx: {
    width: 100,
    height: 18,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 17,
    left: 50,
    color: "#ffffff"
  },
  UbYIwlkj: {
    width: 100,
    height: 29,
    lineHeight: 17,
    fontSize: 15,
    borderRadius: 0,
    position: "absolute",
    top: 60,
    left: 23,
    color: "#ffffff"
  },
  esNRZJXj: {
    width: 117,
    height: 22,
    lineHeight: 14,
    fontSize: 12,
    borderRadius: 0,
    position: "absolute",
    top: 122,
    left: 23,
    fontWeight: "300",
    color: "#ffffff",
    opacity: 0.58
  },
  TCqAuTQQ: {
    width: 100,
    height: 21,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    top: 387,
    left: 45,
    fontWeight: "700"
  },
  zTuPphOO: {
    height: 7,
    width: 34,
    backgroundColor: "#7309b9",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 360,
    left: 130
  },
  WlkTlwXz: {
    height: 10,
    width: 10,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 358,
    left: 170
  },
  temjfMrx: {
    height: 10,
    width: 10,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 358,
    left: 186
  },
  tGDIxOuM: {
    position: "absolute",
    width: 100,
    height: 117,
    top: 420,
    left: 49
  },
  YqwVbKmE: {
    width: 70,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  AJoJiCYi: {
    backgroundColor: "#000000",
    height: 1
  },
  RYKlDJyx: {
    position: "absolute",
    width: 294,
    height: 94,
    top: 410,
    left: 37
  },
  BFDjmCWv: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFFFFF",
    position: "relative",
    top: 0,
    left: 0,
    borderRadius: 10
  },
  XLfsDlsk: {
    height: 10
  },
  ZrGESAzM: {
    width: 28,
    height: 25,
    position: "absolute",
    top: 467,
    left: 46
  },
  qNgZcNnU: {
    width: 28,
    height: 25,
    position: "absolute",
    top: 416,
    left: 47
  },
  sutUwBSW: {
    width: 124,
    height: 25,
    lineHeight: 14,
    fontSize: 13,
    borderRadius: 0,
    position: "absolute",
    top: 7,
    left: 45,
    fontWeight: "500"
  },
  fqDKswZG: {
    width: 100,
    height: 22,
    lineHeight: 14,
    fontSize: 9,
    borderRadius: 0,
    position: "absolute",
    top: 22,
    left: 47,
    fontWeight: "100",
    color: "#AEAEB3"
  },
  YuoLApMp: {
    height: 46,
    width: 359,
    backgroundColor: "#f0f0f1",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 525,
    left: -2
  },
  QDVCjZjd: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 4,
    left: 32
  },
  ZFRHMATn: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 7,
    left: 117
  },
  nUrAGqxk: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 6,
    left: 206
  },
  gNsINHZi: {
    width: 107,
    height: 62
  },
  kjzBusLi: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 7,
    left: 287
  }
});
export default Untitled13Copy;