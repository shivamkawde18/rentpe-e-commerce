import React from "react";
import { Text, View,StyleSheet, TextInput } from "react-native";
const CustomTextInput=(props)=>{
    return(
        
       <TextInput style={styles.input} placeholder={props.placeholder} onChangeText={(e)=>{
           props.flag=="password"?
           props.setPassword(e)
           :
           props.setUsername(e)
       }}></TextInput>
    )

}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default CustomTextInput;