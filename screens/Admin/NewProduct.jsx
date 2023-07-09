import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Avatar, Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";
import { TouchableOpacity } from "react-native";

const NewProduct = ({ navigation, route }) => {
  const loadingOther = false;

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "C1", category: "Laptop" },
    { _id: "C2", category: "Macbook" },
    { _id: "C3", category: "Iphone" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true}></Header>

        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New Product</Text>
        </View>

        <ScrollView
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{ justifyContent: "center", height: 650 }}>
            <View
              style={{
                width: 80,
                height: 80,
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <Avatar.Image
                size={80}
                style={{ backgroundColor: colors.color1 }}
                source={{ uri: image ? image : null }}
              ></Avatar.Image>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { newProduct: true })
                }
              >
                <Avatar.Icon
                  icon={"camera"}
                  size={30}
                  color={colors.color3}
                  style={{
                    backgroundColor: colors.color2,
                    position: "absolute",
                    bottom: 0,
                    right: -5,
                  }}
                ></Avatar.Icon>
              </TouchableOpacity>
            </View>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            ></TextInput>

            <TextInput
              {...inputOptions}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            ></TextInput>
            <TextInput
              {...inputOptions}
              placeholder="Price"
              value={price}
              keyboardType="number-pad"
              onChangeText={setPrice}
            ></TextInput>
            <TextInput
              {...inputOptions}
              placeholder="Stock"
              value={stock}
              keyboardType="number-pad"
              onChangeText={setStock}
            ></TextInput>

            <Pressable
              style={{
                height: 50,
                backgroundColor: colors.color2,
                marginVertical: 10,
                marginHorizontal: 20,
                justifyContent: "center",

                borderRadius: 3,
              }}
              onPress={() => setVisible(true)}
            >
              <Text style={{ textAlign: "center" }}>{category}</Text>
            </Pressable>

            <Button
              textColor={colors.color2}
              style={{
                backgroundColor: colors.color1,
                margin: 20,
                padding: 6,
              }}
              onPress={submitHandler}
              loading={loadingOther}
              disabled={loadingOther}
            >
              Create
            </Button>
          </View>
        </ScrollView>
      </View>

      <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      ></SelectComponent>
    </>
  );
};

export default NewProduct;

const styles = StyleSheet.create({});
