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

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    alert("yeah");

    // will remove this in future
    navigation.navigate("login");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={defaultStyle}>
        {/* Heading */}

        <View style={formStyles.heading}>
          <Text style={formStyles.headingText}>Reset Password</Text>
        </View>

        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          ></TextInput>
          <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          ></TextInput>

          <Pressable
            style={formStyles.btn}
            disabled={otp === "" || password === ""}
            onPress={submitHandler}
          >
            {loading ? (
              <ActivityIndicator color="#000000" />
            ) : (
              <Text style={{ color: colors.color2, textAlign: "center" }}>
                Reset
              </Text>
            )}
          </Pressable>

          <Text style={formStyles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={formStyles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile"></Footer>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({});
