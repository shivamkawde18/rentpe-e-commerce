import React, { useState } from "react";
import { StyleSheet } from "react-native";
///import { NativeBaseProvider,Button,Box } from "native-base";
import { Text, View } from "react-native";
import CustomButton from "../customEvents/CustomButton";
import CustomTextInput from "../customEvents/CustomTextInput";
import { width } from "dom-helpers";
import { auth } from "../Firebase";
import Home from "../Home";

const CreateAccount = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  console.warn(username);
  console.warn(password);
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  const signIn = () => {
    console.warn("hii");

    auth.createUserWithEmailAndPassword(username, password).then((user) => {
      //setUsername(user)
      const userData = {
        email: user.user.email,
        uid: user.user.uid,
      };
      storeData(userData);
      navigation.replace("Header");
    });
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
        <CustomButton flag="Create" signIn={signIn}></CustomButton>
      </View>
    </>
  );
};
export default CreateAccount;
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
