import React, { useState } from "react";
import { StyleSheet } from "react-native";
///import { NativeBaseProvider,Button,Box } from "native-base";
import { Text, View } from "react-native";
import CustomButton from "../customEvents/CustomButton";
import CustomTextInput from "../customEvents/CustomTextInput";
import { width } from "dom-helpers";
import Home from "../Home";
import { auth } from "../Firebase";
//import Profile from "../Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";
//const Stack = createNativeStackNavigator();
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};
const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const usernamePwLogin = () => {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((user) => {
        console.log(user.user.uid);
        const userData = {
          email: user.user.email,
          uid: user.user.uid,
        };
        storeData(userData);
        navigation.replace("Header");
      })
      .catch(() => {
        alert("wrong password");
      });
  };
  const createAcForm = () => {
    navigation.navigate("CreateAccount");
  };
  return (
    <>
      <View style={style.loginContainer}>
        <Text style={style.textTitle}>RentPe</Text>
        <CustomTextInput
          flag="username"
          placeholder="Enter Username"
          setUsername={setUsername}
        ></CustomTextInput>
        <CustomTextInput
          flag="password"
          placeholder="Enter Password"
          setPassword={setPassword}
        ></CustomTextInput>
        <CustomButton
          flag="Login"
          usernamePwLogin={usernamePwLogin}
        ></CustomButton>
        <CustomButton
          flag="Create Account"
          createAcForm={createAcForm}
        ></CustomButton>
      </View>
    </>
  );
};
export default LoginForm;
const style = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textTitle: {
    fontWeight: "bold",
    marginLeft: "40%",
    fontSize: 33,
  },
});
