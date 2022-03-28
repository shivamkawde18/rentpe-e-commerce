import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Home from "./Home";
import LoginForm from "./view/LoginForm";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Car from "./categories/Car";
import Navbar from "./categories/Navbar";
const Tab = createMaterialTopTabNavigator();
const Usercheck = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      console.log(value, "this is");
      if (value !== null) {
        // value previously stored
        setUser(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(user);
  return (
    <>
      {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={Car} />
      <Tab.Screen name="Settings" component={Car} />
    </Tab.Navigator> */}
      {user == null ? <LoginForm></LoginForm> : <Navbar user={user}></Navbar>}
    </>
  );
};
export default Usercheck;
