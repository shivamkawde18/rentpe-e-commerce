import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Profile from "../Profile";
import Bike from "./Bike";
import Car from "./Car";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
const Navbar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default Navbar;
