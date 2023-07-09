import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../styles/styles";

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCartHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      style={{ height: 400 }}
      activeOpacity={1}
      onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          width: 220,
          alignItems: "center",
          borderColor: "#EBEBEB",
          shadowColor: "black",
          borderRadius: 8,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          borderWidth: 0.5,
          shadowOpacity: 0.15,
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: "100%",
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        ></Image>

        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: "300",
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            {price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => addToCartHandler(id, stock)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: i % 2 === 0 ? colors.color1 : colors.color2,
              }}
            >
              Add To Cart
            </Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
