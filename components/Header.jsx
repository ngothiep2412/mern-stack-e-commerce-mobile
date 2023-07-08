import React from "react";
import { Avatar } from "react-native-paper";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { colors } from "../styles/styles";

export default function Header({ back, emptyCart = false }) {
  const route = useRoute();
  const navigate = useNavigation();

  const emptyCartHandler = () => {
    console.log("Empty Cart");
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            zIndex: 10,
          }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{ backgroundColor: colors.color4 }}
            icon={"arrow-left"}
            color={
              route.name === "productdetails" ? colors.color2 : colors.color3
            }
          ></Avatar.Icon>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 40,
          zIndex: 10,
        }}
        onPress={emptyCart ? emptyCartHandler : () => navigate.navigate("cart")}
      >
        <Avatar.Icon
          style={{ backgroundColor: colors.color4 }}
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          color={
            route.name === "productdetails" ? colors.color2 : colors.color3
          }
        ></Avatar.Icon>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
