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
import carFile from "./categoriesApi/Car.json";
const Car = ({ navigation }) => {
  const [cars, setCars] = useState([]);
  useEffect(async () => {
    setCars(carFile);
  }, []);
  console.log(cars);
  return (
      <>
      
    <NativeBaseProvider>
        
      <ScrollView>
        <Box alignItems="center">
          <Text fontWeight="400" fontSize="xl" bold>
            Cars
          </Text>
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
            <Stack p="4" space={3}>
              {cars.map((e) => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("CategoryDetail", {
                          company: e.compnay,
                          carname: e.carname,
                          price: e.price,
                          city: e.city,
                          state: e.state,
                          mobileno: e.mobileno,
                          image: e.image,
                        });
                      }}
                    >
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: `${e.image}`,
                            alt: "image",
                          }}
                        />
                      </AspectRatio>
                      <Text>Price:{e.price} Per Day</Text>
                      <Text>Model:{e.carname}</Text>
                    </TouchableOpacity>
                  </>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
    </>
  );
};
export default Car;
