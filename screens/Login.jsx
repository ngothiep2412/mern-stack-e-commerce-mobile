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
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userAction";
import { useMessageAndErrorUser } from "../utils/hooks";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useMessageAndErrorUser(navigation, dispatch, "profile");

  const submitHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={defaultStyle}>
        {/* Heading */}

        <View style={formStyles.heading}>
          <Text style={formStyles.headingText}>Login</Text>
        </View>

        <View style={formStyles.container}>
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

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={formStyles.forget}>Forget Password?</Text>
          </TouchableOpacity>

          <Pressable
            style={formStyles.btn}
            disabled={email === "" || password === ""}
            onPress={submitHandler}
          >
            {loading ? (
              <ActivityIndicator color="#000000" />
            ) : (
              <Text style={{ color: colors.color2, textAlign: "center" }}>
                Login
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
      </View>
      <Footer activeRoute="profile"></Footer>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
