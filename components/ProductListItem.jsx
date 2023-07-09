import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/styles";
import MyModal from "./MyModal";

const ProductListItem = ({
  navigate,
  deleteProductHandler,
  i,
  id,
  price,
  stock,
  name,
  category,
  imgSrc,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOpenModal((prev) => !prev)}
        onPress={() => navigate.navigate("productdetails", { id })}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
          }}
        >
          <Image
            source={{ uri: imgSrc }}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
              // marginRight: 10,
            }}
          ></Image>

          <Text style={{ width: 40, color: colors.color2 }} numberOfLines={1}>
            {price}$
          </Text>
          <Text
            style={{ maxWidth: 50, color: colors.color2 }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={{ width: 60, color: colors.color2, textAlign: "center" }}
            numberOfLines={1}
          >
            {category}
          </Text>
          <Text style={{ width: 40, color: colors.color2 }} numberOfLines={1}>
            {stock}
          </Text>
        </View>
      </TouchableOpacity>

      {openModal && (
        <MyModal
          id={id}
          deleteHandler={deleteProductHandler}
          navigate={navigate}
          setOpenModal={setOpenModal}
        ></MyModal>
      )}
    </>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
