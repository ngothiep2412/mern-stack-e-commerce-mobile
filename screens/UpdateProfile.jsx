import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formStyles,
  inputOptions,
} from "../styles/styles";
import { TextInput } from "react-native-paper";
import Header from "../components/Header";

const loading = false;

const UpdateProfile = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const disableBtn =
    !name || !email || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    alert("yeah");
  };

  return (
    <View style={defaultStyle}>
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
        <Text style={formStyles.headingText}>Edit Profile</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View>
          <TextInput
            {...inputOptions}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          ></TextInput>

          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          ></TextInput>

          <TextInput
            {...inputOptions}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          ></TextInput>

          <TextInput
            {...inputOptions}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          ></TextInput>

          <TextInput
            {...inputOptions}
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
          ></TextInput>

          <TextInput
            {...inputOptions}
            placeholder="Pin Code"
            value={pinCode}
            onChangeText={setPinCode}
          ></TextInput>

          <Pressable
            style={formStyles.btn}
            disabled={disableBtn}
            onPress={submitHandler}
          >
            {loading ? (
              <ActivityIndicator color="#000000" />
            ) : (
              <Text style={{ color: colors.color2, textAlign: "center" }}>
                Udate
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
