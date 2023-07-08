import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { cartItems } from "./Cart";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ConfirmOrder = () => {
  const itemsPrice = 4800;
  const shippingCharges = 200;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;

  const navigate = useNavigation();
  return (
    <View style={defaultStyle}>
      <Header back={true}></Header>

      {/* Heading */}
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Confirm"
        text2="Order"
      ></Heading>

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView>
          {cartItems.map((item, index) => (
            <ConfirmOrderItem
              key={item.product}
              price={item.price}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
            ></ConfirmOrderItem>
          ))}
        </ScrollView>
      </View>

      <PriceTag heading={"Subtotal"} value={itemsPrice}></PriceTag>
      <PriceTag heading={"Shipping"} value={shippingCharges}></PriceTag>
      <PriceTag heading={"Tax"} value={tax}></PriceTag>
      <PriceTag heading={"Total"} value={totalAmount}></PriceTag>

      <TouchableOpacity
        style={{
          backgroundColor: colors.color3,
          borderRadius: 100,
          paddingVertical: 20,
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Avatar.Icon
          icon={"chevron-right"}
          size={20}
          color="white"
          style={{ backgroundColor: colors.color3 }}
        ></Avatar.Icon>
        <Text style={{ color: colors.color2 }}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmOrder;

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>{value}$</Text>
  </View>
);

const styles = StyleSheet.create({});
