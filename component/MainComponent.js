import React, { useState } from "react";
import LoginForm from "./view/LoginForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "./view/CreateAccountForm";
import Home from "./Home";
import Car from "./categories/Car";
import CategoryDetail from "./categories/CategoryDetail";
import Bike from "./categories/Bike";
import Pgrooms from "./categories/Pgrooms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Usercheck from "./Usercheck";
import Navbar from "./categories/Navbar";
const Stack = createNativeStackNavigator();
const MainComponet = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="UserLogin"
            component={Usercheck}
            options={{ title: "rentPe" }}
          />
          <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ title: "Create Account" }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Header"
            component={Navbar}
            options={{ title: "rentPe" }}
          />
          <Stack.Screen
            name="Car"
            component={Car}
            options={{ title: "cars" }}
          />
          <Stack.Screen
            name="Bike"
            component={Bike}
            options={{ title: "Bikes" }}
          />
          <Stack.Screen
            name="Rooms"
            component={Pgrooms}
            options={{ title: "PG/Home" }}
          />
          <Stack.Screen
            name="CategoryDetail"
            component={CategoryDetail}
            options={{ title: "Spacipication" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default MainComponet;
