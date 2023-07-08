import {
  BackHandler,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Headline, Searchbar } from "react-native-paper";

const SearchModal = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products,
}) => {
  const navigate = useNavigation();

  const backAction = () => {
    setSearchQuery("");
    setActiveSearch(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChange={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{
            marginTop: 20,
          }}
        ></Searchbar>

        <ScrollView>
          <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 10,
            }}
          >
            {products.map((item) => (
              <SearchItem
                key={item._id}
                imgSrc={item.images[0]?.url}
                name={item.name}
                price={item.price}
                handler={() =>
                  navigate.navigate("productdetails", { id: item._id })
                }
              ></SearchItem>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchModal;

const SearchItem = ({ price, name, imgSrc, handler }) => (
  <TouchableOpacity onPress={handler}>
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.color2,
        borderColor: "#EBEBEB",
        shadowColor: "black",
        borderRadius: 8,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        borderWidth: 0.5,
        shadowOpacity: 0.15,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginVertical: 30,
      }}
    >
      <Image
        source={{ uri: imgSrc }}
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          resizeMode: "contain",
          top: -15,
          left: 10,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></Image>

      <View style={{ width: "80%", paddingHorizontal: 30 }}>
        <Text numberOfLines={1}>{name}</Text>
        <Headline style={{ fontWeight: "900" }}>{price}$</Headline>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({});
