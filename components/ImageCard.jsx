import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Image } from "react-native";
import { Avatar } from "react-native-paper";

const ImageCard = ({ src, id, deleteHandler }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: src }}
        style={{ width: "100%", height: "80%", resizeMode: "contain" }}
      ></Image>
      <TouchableOpacity onPress={() => deleteHandler(id)}>
        <Avatar.Icon
          size={30}
          icon={"delete"}
          style={{ backgroundColor: colors.color1 }}
        ></Avatar.Icon>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    margin: 10,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    height: 300,
    borderColor: "#EBEBEB",
    shadowColor: "black",
    borderRadius: 8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 0.5,
    shadowOpacity: 0.15,
  },
});
