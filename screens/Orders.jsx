import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, defaultStyle, formStyles } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

const loading = false;

const orders = [
  {
    _id: 1,
    shippingInfo: {
      address: "District 9",
      city: "Ho Chi Minh",
      country: "Viet Nam",
      pinCode: "100000",
    },
    createdAt: "08-07-2023T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 200000,
  },
  {
    _id: 2,
    shippingInfo: {
      address: "District 9",
      city: "Ho Chi Minh",
      country: "Viet Nam",
      pinCode: "100000",
    },
    createdAt: "08-07-2023T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 200000,
  },
  {
    _id: 3,
    shippingInfo: {
      address: "District 9",
      city: "Ho Chi Minh",
      country: "Viet Nam",
      pinCode: "100000",
    },
    createdAt: "08-07-2023T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 200000,
  },
];

const Orders = () => {
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true}></Header>

      {/* Heading */}

      <View
        style={{
          marginBottom: 20,
          height: 50,
          backgroundColor: colors.color3,
          width: "100%",
          marginTop: 60,
          justifyContent: "center",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Text style={formStyles.headingText}>Orders</Text>
      </View>

      {loading ? (
        <Loader></Loader>
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                  //   admin={true}
                  //   loading={true}
                ></OrderItem>
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
