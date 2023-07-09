import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const images = [
    {
      url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWjT2WwCnFtNM9TSkZYCrVznfX7VYNPEwH3khtL5ppQGR6UfD8j3WmukRI2yKnaNUeUvxYLuOINPll-HqJ6u1GjVS5R6Ltjw&usqp=CAE",
      _id: 1,
    },
    {
      url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWjT2WwCnFtNM9TSkZYCrVznfX7VYNPEwH3khtL5ppQGR6UfD8j3WmukRI2yKnaNUeUvxYLuOINPll-HqJ6u1GjVS5R6Ltjw&usqp=CAE",
      _id: 2,
    },
  ];

  const [id] = useState(route.params.id);
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

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true}></Header>

        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Update Product</Text>
        </View>

        {loading ? (
          <Loader></Loader>
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View style={{ justifyContent: "center", height: 650 }}>
              <Button
                onPress={() =>
                  navigation.navigate("productimages", { id, images })
                }
                textColor={colors.color1}
              >
                Mange Images
              </Button>

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
                keyboardType="number-pad"
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
              ></TextInput>
              <TextInput
                {...inputOptions}
                keyboardType="number-pad"
                placeholder="Stock"
                value={stock}
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
                Update
              </Button>
            </View>
          </ScrollView>
        )}
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

export default UpdateProduct;

const styles = StyleSheet.create({});
