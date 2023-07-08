import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";
import { iconOptions } from "../screens/ProductDetail";

const CartItem = ({
  name,
  amount,
  imgSrc,
  qty,
  stock,
  index,
  id,
  incrementHandler,
  decrementHandler,
  navigate,
}) => {
  return (
    <View style={{ flexDirection: "row", height: 100, marginVertical: 20 }}>
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image source={{ uri: imgSrc }} style={styles.image}></Image>
      </View>
      <View style={{ width: "-40%", paddingHorizontal: 25 }}>
        <Text
          style={{ fontSize: 17 }}
          numberOfLines={1}
          onPress={() => navigate.navigate("productdetails", { id })}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "900" }} numberOfLines={1}>
          {amount}
        </Text>
      </View>

      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
          <Avatar.Icon icon={"minus"} {...iconOptions}></Avatar.Icon>
        </TouchableOpacity>
        <Text style={styles.qty}>{qty}</Text>
        <TouchableOpacity onPress={() => incrementHandler(id, qty, stock)}>
          <Avatar.Icon icon={"plus"} {...iconOptions}></Avatar.Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    top: "-20%",
    left: "10%",
  },
  qtyContainer: {
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  qty: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
});
