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
import { useDispatch, useSelector } from "react-redux";
import { useMessageAndErrorOther } from "../utils/hooks";
import { updateProfile } from "../redux/actions/otherAction";

const loading = false;

const UpdateProfile = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);

  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [country, setCountry] = useState(user?.country);
  const [pinCode, setPinCode] = useState(user?.pinCode.toString());

  const disableBtn =
    !name || !email || !address || !city || !country || !pinCode;

  const dispatch = useDispatch();

  const loading = useMessageAndErrorOther(dispatch, navigation, "profile");

  const submitHandler = () => {
    dispatch(updateProfile(name, email, address, city, country, pinCode));
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
