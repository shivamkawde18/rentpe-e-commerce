import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Text,
  Box,
  NativeBaseProvider,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  ScrollView,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Profile = ({ navigation }) => {
  const _clearAll = async () => {
    await AsyncStorage.clear();
  };
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
  console.log(user, "apmna");
  return (
    <>
      <NativeBaseProvider>
        <TouchableOpacity>
          <Text
            onPress={() => {
              _clearAll();
              navigation.replace("Login");
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <ScrollView>
          <Box alignItems="center">
            <Box
              maxW="80"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              marginBottom="1/2"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              {user ? (
                <>
                  <Text bold>Username:{user.email}</Text>
                </>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    </>
  );
};
export default Profile;
