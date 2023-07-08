import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import Verify from "./screens/Verify";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/ChangePassword";
import Orders from "./screens/Orders";

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home}></Stack.Screen>
          <Stack.Screen
            name="productdetails"
            component={ProductDetail}
          ></Stack.Screen>
          <Stack.Screen name="cart" component={Cart}></Stack.Screen>
          <Stack.Screen
            name="confirmorder"
            component={ConfirmOrder}
          ></Stack.Screen>
          <Stack.Screen name="payment" component={Payment}></Stack.Screen>
          <Stack.Screen name="login" component={Login}></Stack.Screen>
          <Stack.Screen name="signup" component={SignUp}></Stack.Screen>
          <Stack.Screen name="profile" component={Profile}></Stack.Screen>
          <Stack.Screen
            name="changepassword"
            component={ChangePassword}
          ></Stack.Screen>
          <Stack.Screen
            name="updateprofile"
            component={UpdateProfile}
          ></Stack.Screen>
          <Stack.Screen name="orders" component={Orders}></Stack.Screen>

          {/* Resetting Password */}
          <Stack.Screen
            name="forgetpassword"
            component={ForgetPassword}
          ></Stack.Screen>
          <Stack.Screen name="verify" component={Verify}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" topOffset={40}></Toast>
    </NavigationContainer>
  );
}

export default Main;
