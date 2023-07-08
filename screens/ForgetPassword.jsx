import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import Footer from "../components/Footer";

const loading = false;

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const submitHandler = () => {
    alert("yeah");

    // will remove this in future
    navigation.navigate("verify");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={defaultStyle}>
        {/* Heading */}

        <View style={formStyles.heading}>
          <Text style={formStyles.headingText}>Forget Password</Text>
        </View>

        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          ></TextInput>

          <Pressable
            style={formStyles.btn}
            disabled={email === ""}
            onPress={submitHandler}
          >
            {loading ? (
              <ActivityIndicator color="#000000" />
            ) : (
              <Text style={{ color: colors.color2, textAlign: "center" }}>
                Send OTP
              </Text>
            )}
          </Pressable>

          <Text style={formStyles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={formStyles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile"></Footer>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: colors.color3,
    padding: 10,
    borderRadius: 5,
  },
  headingText: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: colors.color2,
  },
});
