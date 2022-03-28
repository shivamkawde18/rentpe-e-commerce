import React from "react";
import { Button ,StyleSheet} from "react-native";
//import { NativeBaseProvider,Button } from "native-base";
const CustomButton=(props)=>{
    console.log(props);
    return(
       
            <Button title={props.flag} onPress={()=>{
                if(props.flag=="Create Account")
                props.createAcForm()
                else if(props.flag=="Create")
                props.signIn()
                else if(props.flag=="Login")
                props.usernamePwLogin()
            }}> </Button>
       
        
    )
}

export default CustomButton;