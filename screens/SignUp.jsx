import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultImg,
  defaultStyle,
  formStyles,
  inputOptions,
} from "../styles/styles";
import { Avatar, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const loading = false;

const SignUp = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const disableBtn =
    !name || !password || !email || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    alert("yeah");
  };

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      // dispatch updatePic here
    }
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      <View style={defaultStyle}>
        {/* Heading */}

        <View style={formStyles.heading}>
          <Text style={formStyles.headingText}>Sign Up</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            maxHeight: 660,
            padding: 20,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{ justifyContent: "center", minHeight: 950 }}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={80}
              source={{ uri: avatar ? avatar : defaultImg }}
            ></Avatar.Image>

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Text style={{ color: colors.color1, textAlign: "center" }}>
                Change Photo
              </Text>
            </TouchableOpacity>

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
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
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

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("forgetpassword")}
            >
              <Text style={formStyles.forget}>Forget Password?</Text>
            </TouchableOpacity>

            <Pressable
              style={formStyles.btn}
              disabled={disableBtn}
              onPress={submitHandler}
            >
              {loading ? (
                <ActivityIndicator color="#000000" />
              ) : (
                <Text style={{ color: colors.color2, textAlign: "center" }}>
                  Sign Up
                </Text>
              )}
            </Pressable>

            <Text style={formStyles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("signup")}
            >
              <Text style={formStyles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer activeRoute="profile"></Footer>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
