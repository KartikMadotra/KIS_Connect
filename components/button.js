import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View } from 'react-native';
import Component from "./userdata";




export default function Accept (){
    const [buttonText, setButtonText] = useState('Click Me');
    return(
        <View>
         
            <Button style={styles.Button} title={buttonText} onPress={()=>setButtonText("You clicked")}>

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
 Nutton:{
 height:50,
 width:50,
 color:"purple",
 textAlign:'justify',
 fontFamily:'verdana',
 fontSize:'30',
 padding:40
 }
})