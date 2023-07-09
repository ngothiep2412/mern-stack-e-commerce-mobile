import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

export const products = [
  {
    price: 123,
    stock: 2,
    name: "sample",
    _id: "1",
    category: "asdadsadasd",
    images: [
      {
        url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
      },
    ],
  },
  {
    price: 123,
    stock: 22,
    name: "Macbook",
    _id: "2",
    category: "a11sdadsadasd",
    images: [
      {
        url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
      },
    ],
  },
  {
    price: 123,
    stock: 22,
    name: "Macbook",
    _id: "3",
    category: "a11sdadsadasd",
    images: [
      {
        url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
      },
    ],
  },
  {
    price: 123,
    stock: 22,
    name: "Macbook",
    _id: "4",
    category: "a11sdadsadasd",
    images: [
      {
        url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
      },
    ],
  },
  {
    price: 123,
    stock: 22,
    name: "Macbook",
    _id: "5",
    category: "a11sdadsadasd",
    images: [
      {
        url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
      },
    ],
  },
  {
    price: 123,
    stock: 22,
    name: "Macbook",
    _id: "6",
    category: "a11sdadsadasd",
    images: [
      {
        url: "https://i.ytimg.com/vi/iUrlaSKGaQ0/maxresdefault.jpg",
      },
    ],
  },
];

const Home = () => {
  const navigate = useNavigation();
  const categories = [
    { cateogry: "Nice", _id: "1" },
    { cateogry: "Football", _id: "2" },
    { cateogry: "Men", _id: "3" },
    { cateogry: "Women", _id: "4" },
    { cateogry: "Helicoper", _id: "5" },
  ];

  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id, stock) => {
    console.log("Add to cart " + id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        ></SearchModal>
      )}
      <View style={defaultStyle}>
        <Header />
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Heading text1="Our" text2="Products"></Heading>

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"white"}
                style={{
                  backgroundColor: colors.color1,
                  elevation: 12,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Pressable
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                  padding: 20,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.cateogry}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        {/* Products */}

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              ></ProductCard>
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"}></Footer>
    </>
  );
};

export default Home;
