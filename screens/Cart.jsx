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
import { Avatar } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Macbook",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-bac-600x600.jpg",
    product: "1",
    stock: 3,
    price: 123,
    quantity: 1,
  },
  {
    name: "Macbook",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-bac-600x600.jpg",
    product: "2",
    stock: 3,
    price: 123,
    quantity: 2,
  },
  {
    name: "Macbook",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-bac-600x600.jpg",
    product: "3",
    stock: 3,
    price: 123,
    quantity: 3,
  },
  {
    name: "Macbook",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-bac-600x600.jpg",
    product: "4",
    stock: 3,
    price: 123,
    quantity: 4,
  },
  {
    name: "Macbook",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-bac-600x600.jpg",
    product: "5",
    stock: 3,
    price: 123,
    quantity: 5,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const decrementHandler = (id, qty) => {};
  const incrementHandler = (id, qty, stock) => {};

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      {/* Header*/}
      <Header back={true} emptyCart={true}></Header>

      {/* Heading */}
      <Heading
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
        text1="Shopping"
        text2="Cart"
      ></Heading>

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item, index) => (
            <CartItem
              navigate={navigate}
              key={item.product}
              id={item.product}
              name={item.name}
              stock={item.stock}
              imgSrc={item.image}
              amount={item.price}
              index={index}
              qty={item.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            ></CartItem>
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>5$</Text>
      </View>

      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
        style={{
          backgroundColor: colors.color3,
          borderRadius: 100,
          //   padding: 5,
          paddingVertical: 20,
          margin: 30,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar.Icon
          icon={"cart"}
          size={20}
          color="white"
          style={{ backgroundColor: colors.color3 }}
        ></Avatar.Icon>
        <Text style={{ color: colors.color2 }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
