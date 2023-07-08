import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar } from "react-native-paper";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
  size: 25,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    weight: 30,
    height: 30,
  },
};

const ProductDetail = ({ route: { params } }) => {
  const [quantity, setQuantity] = useState(1);

  const stock = 40;

  const isCarousel = useRef(null);

  const images = [
    {
      id: "1",
      url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
    },
    {
      id: "2",
      url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
    },
    {
      id: "3",
      url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
    },
  ];

  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };
  const incrementQty = () => {
    if (stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    Toast.show({
      type: "success",
      text1: "Added To Cart Successfully",
    });
  };

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true}></Header>

      {/* Carousel */}

      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      ></Carousel>
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -390,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text numberOfLines={2} style={{ fontSize: 25 }}>
          MacBook Pro
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }}>123$</Text>
        <Text
          numberOfLines={8}
          style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
        >
          "asdasdasdasdasd"
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "100" }}>
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions}></Avatar.Icon>
            </TouchableOpacity>

            <Text style={styles.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions}></Avatar.Icon>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={addToCartHandler}
        >
          <Avatar.Icon
            icon={"cart"}
            size={28}
            color="white"
            style={{ backgroundColor: colors.color3 }}
          ></Avatar.Icon>
          <Text style={{ color: colors.color2 }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={styles.container} key={index}>
    <Image source={{ uri: item.url }} style={styles.image}></Image>
  </View>
);

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    padding: 6,
    // textAlignVertical: "auto",
    // alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 35,
    flexDirection: "row",
  },
});
