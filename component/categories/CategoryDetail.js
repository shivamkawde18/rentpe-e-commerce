import React, { useEffect, useState } from "react";
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
const CategoryDetail = ({ navigation, route }) => {
  const { company, price, mobileno, state, city, carname, image ,flag,BHK} =
    route.params;
  console.log(price);
  return (
    <>
      <NativeBaseProvider>
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
              <Stack p="4" space={3}>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: `${image}`,
                    }}
                  />
                </AspectRatio>
                {flag?<>
                   
              <Text bold>Type:{BHK}</Text>
              <Text bold>City:{city}</Text>
              <Text bold>State:{state}</Text>
              <Text bold>Price:{price} Rs Per-day</Text>
              <Text color="green.500">Call:{mobileno}</Text>
                </>
                :<>
                <Text bold>
                Company:
                <Text bold>{company}</Text>{" "}
              </Text>
              <Text bold>Model:{carname}</Text>
              <Text bold>City:{city}</Text>
              <Text bold>State:{state}</Text>
              <Text bold>Price:{price} Rs Per-day</Text>
              <Text color="green.500">Call:{mobileno}</Text></>}
                
              </Stack>
            </Box>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    </>
  );
};
export default CategoryDetail;
