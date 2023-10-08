
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet,Image, Text, View } from 'react-native';

let rawData = {
    name:"Kartik Madotra",
     class:"9",
     rollno:"13",
     FathersName:"Kuldeep Kuldeep",
     MothersName:"Beeta Rani"
}



// const [buttonText, setText] = useState('Click Me');

// const fun= ()=>{
//   setText("You clicked")
//  // rawData.name=setText('Kartik')
// }
// const Acc = () =>  {
//   return(
//       <View>
       
//           <Button style={styles.Button} title={buttonText} onPress={fun()}></Button>
//       </View>
//   )
// }




const fun = (text) =>{
    console.log(text)
}


const Component = ()=>{
    const [buttonText , setbuttonText] = useState('Click me !!!')
    const [defaultName,setName]=useState("Kartik")
  return(
    <View>
     <Pic defaultName={defaultName}/>
      {/* <Text style={styles.component}>Name:- {rawData.name}</Text>
      <Text style={styles.component}>Class:- {rawData.class}</Text>
      <Text style={styles.component}>Roll No.:- {rawData.rollno}</Text>
      <Text style={styles.component}>Father's Name:- {rawData.FathersName}</Text>
      <Text style={styles.component}>Mother's Name:- {rawData.MothersName}</Text> */}
      <Button title={buttonText} onPress={()=>{setbuttonText('You Clicked Me !!!'),setName("Madotra")}}></Button>

    </View>
  )

}

const Pic = (data)=>{
    return(
        <View style={{alignContent:"center"}}>
             <Image style={styles.Pic} source={require('../assets/favicon.png')}/>
             <Text>Name:-{data.defaultName}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    component:{
        textAlign:"top",
        fontSize:45,
        fontFamily:"verdana",
        color:'blue'
      },
      Pic:{
        height:110,
        width:110,

      }
      
})



export default Component ;

