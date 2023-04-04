import { products_get_products_list } from "../../store/products/products_response_get_getProducts.slice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import { useEffect } from "react";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  const {
    entities: products_response_get_getProducts
  } = useSelector(state => state.products_response_get_getProducts);
  useEffect(() => {
    dispatch(products_get_products_list());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.UmVxGlUB}>{products_response_get_getProducts[0].title}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  JKGsKIsc: {
    position: "absolute",
    width: 100,
    height: 116,
    left: 10,
    top: 44
  },
  ZtYKHLYj: {
    width: 246,
    height: 0,
    backgroundColor: "#FFFFFF"
  },
  sIxFALrU: {
    backgroundColor: "#000000",
    height: 1
  },
  OkeaUQlv: {
    position: "absolute",
    width: "100%",
    height: "50%",
    left: 0,
    top: 0
  },
  IyBcUIOM: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  pPBVLSny: {
    backgroundColor: "#000000",
    height: 1
  },
  UmVxGlUB: {
    width: 325,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;