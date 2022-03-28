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
import AsyncStorage from '@react-native-async-storage/async-storage';
//const Tab = createBottomTabNavigator();
const Home = ({ navigation }) => {

  const _clearAll = async () => {
    await AsyncStorage.clear();
  };
  return (
    <>
      <NativeBaseProvider>
        
        <ScrollView>
          <Box alignItems="center">
            {/* <Text fontWeight="400" fontSize="xl" bold>
              Categories
            </Text> */}
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
                <TouchableOpacity
                  onPress={(e) => {
                    navigation.navigate("Car");
                  }}
                >
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecartiles/image/baleno_tile.jpg?modified=20200814113508",
                        alt: "image",
                      }}
                    />
                  </AspectRatio>
                </TouchableOpacity>
                <Text
                  fontWeight="400"
                  fontSize="xl"
                  bold
                  onPress={(e) => {
                    navigation.navigate("Car");
                  }}
                >
                  Cars
                </Text>
                <TouchableOpacity
                  onPress={(e) => {
                    navigation.navigate("Bike");
                  }}
                >
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hero_Honda_Splendor_2007.jpg",
                      alt: "image",
                    }}
                  />
                </AspectRatio>
                <Text fontWeight="400" fontSize="xl" bold  onPress={(e) => {
                    navigation.navigate("Bike");
                  }}>
                  Bike
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={(e) => {
                    navigation.navigate("Rooms");
                  }}
                >
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: "https://teja12.kuikr.com/is/a/c/655x525/gallery_images/original/cf5d0a00a7b3ed4.gif",
                      alt: "image",
                    }}
                  />
                </AspectRatio>
                </TouchableOpacity>
                <Text fontWeight="400" fontSize="xl" bold  onPress={(e) => {
                    navigation.navigate("Rooms");
                  }}>
                  Home/PG
                </Text>
                {/* <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: "https://static.independent.co.uk/2022/01/28/16/Best%20online%20clothes%20shops%20and%20brands%20Indybest%20copy.jpg?quality=75&width=982&height=726&auto=webp",
                      alt: "image",
                    }}
                  />
                </AspectRatio>
                <Text fontWeight="400" fontSize="xl" bold>
                  Clothes
                </Text> */}
              </Stack>
            </Box>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    </>
  );
};
export default Home;
