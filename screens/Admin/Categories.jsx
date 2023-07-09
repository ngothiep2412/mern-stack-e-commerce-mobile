import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../../styles/styles";
import Header from "../../components/Header";
import { Avatar, Button, TextInput } from "react-native-paper";

const categories = [
  { name: "Laptop", _id: "1" },
  { name: "Laptop", _id: "2" },
];

const Categories = () => {
  const [category, setCategory] = useState("");

  const deleteHandler = (id) => {
    console.log(`Deleting Category, ${id}`);
  };

  const submitHandler = () => {};

  const loading = false;

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true}></Header>

        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Categories</Text>
        </View>

        <ScrollView style={{ marginBottom: 20 }}>
          <View
            style={{
              backgroundColor: colors.color2,
              padding: 20,
              minHeight: 400,
            }}
          >
            {categories.map((i) => (
              <CategoryCard
                name={i.name}
                key={i._id}
                id={i._id}
                deleteHandler={deleteHandler}
              ></CategoryCard>
            ))}
          </View>
        </ScrollView>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Category"
            value={category}
            onChangeText={setCategory}
          ></TextInput>

          <Button
            textColor={colors.color2}
            style={{ backgroundColor: colors.color1, margin: 20, padding: 6 }}
            disabled={category === ""}
            loading={loading}
            onPress={submitHandler}
          >
            Add
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Categories;

const CategoryCard = ({ name, id, deleteHandler }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{ backgroundColor: colors.color1 }}
      ></Avatar.Icon>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.color2,
    borderColor: "#EBEBEB",
    shadowColor: "black",
    borderRadius: 8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 0.5,
    shadowOpacity: 0.15,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  container: {
    padding: 10,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
});
