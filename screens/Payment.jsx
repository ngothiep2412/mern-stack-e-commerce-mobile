import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Avatar, RadioButton } from "react-native-paper";

const Payment = ({ navigation, route }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const isAuthenticated = false;

  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  const codHandler = () => {};
  const onlineHandler = () => {};

  return (
    <View style={defaultStyle}>
      <Header back={true}></Header>
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Payment"
        text2="Method"
      ></Heading>

      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Cash On Delivery</Text>
            <RadioButton color={colors.color1} value={"COD"}></RadioButton>
          </View>
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>ONLINE</Text>
            <RadioButton color={colors.color1} value={"ONLINE"}></RadioButton>
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : paymentMethod === "COD"
            ? codHandler
            : onlineHandler
        }
        style={{
          backgroundColor: colors.color3,
          borderRadius: 100,
          paddingVertical: 20,
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar.Icon
          icon={
            paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }
          size={20}
          color="white"
          style={{ backgroundColor: colors.color3 }}
        ></Avatar.Icon>
        <Text style={{ color: colors.color2 }}>
          {paymentMethod === "COD" ? "Place Order" : "Pay"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
});
