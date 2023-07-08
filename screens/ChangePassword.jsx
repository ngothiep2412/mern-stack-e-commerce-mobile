import {
  ActivityIndicator,
  Pressable,
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

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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
        <Text style={formStyles.headingText}>Change Password</Text>
      </View>

      <View style={[formStyles.container, { flex: 1 }]}>
        <TextInput
          {...inputOptions}
          placeholder="Old Password"
          secureTextEntry={true}
          value={oldPassword}
          onChangeText={setOldPassword}
        ></TextInput>

        <TextInput
          {...inputOptions}
          placeholder="New Password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        ></TextInput>

        <Pressable
          style={formStyles.btn}
          disabled={oldPassword === "" || newPassword === ""}
          onPress={submitHandler}
        >
          {loading ? (
            <ActivityIndicator color="#000000" />
          ) : (
            <Text style={{ color: colors.color2, textAlign: "center" }}>
              Change
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
