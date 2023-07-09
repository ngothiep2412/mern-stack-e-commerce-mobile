import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading";
import { products } from "../Home";
import ProductListItem from "../../components/ProductListItem";
import Chart from "../../components/Chart";

const AdminPanel = ({ navigation }) => {
  const loading = false;

  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminorders");
        break;
      case "Product":
        navigation.navigate("newproduct");
        break;
      default:
        navigation.navigate("adminorders");
        break;
    }
  };
  const deleteProductHandler = (id) => {
    console.log("Deleting Product with ID:" + id);
  };

  return (
    <View style={defaultStyle}>
      <Header back={true}></Header>

      {/* Heading */}
      <View style={{ paddingTop: 70, marginBottom: 20 }}>
        <Text style={formHeading}>Admin Panel</Text>
      </View>

      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <View>
            <View
              style={{
                backgroundColor: colors.color3,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Chart inStock={12} outOfStock={2}></Chart>
            </View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                icon={"plus"}
                text={"Product"}
                handler={navigationHandler}
              ></ButtonBox>

              <ButtonBox
                icon={"format-list-bulleted-square"}
                text={"All Orders"}
                handler={navigationHandler}
                reverse={true}
              ></ButtonBox>

              <ButtonBox
                icon={"plus"}
                text={"Category"}
                handler={navigationHandler}
              ></ButtonBox>
            </View>
          </View>

          <ProductListHeading></ProductListHeading>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {products.map((item, index) => (
                <ProductListItem
                  navigate={navigation}
                  deleteProductHandler={deleteProductHandler}
                  key={item._id}
                  i={index}
                  id={item._id}
                  price={item.price}
                  stock={item.stock}
                  name={item.name}
                  category={item.category}
                  imgSrc={item.images[0].url}
                ></ProductListItem>
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;

const styles = StyleSheet.create({});
