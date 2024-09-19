import { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { Modal } from "react-native";
import { ScrollView } from "react-native";
import { Button } from "react-native";

import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { StatusBar } from "react-native";

const Img1 =require('../assets/icon.png');
export default function Page1()
{
  let [Modalstatus,setmodel]=useState(false)
  return(


    <ImageBackground source={Img1} onPress={()=>
    {
      console.log("imageclicked")
    }
    }style={{flex:1,width:400,height:900}}>
      <StatusBar backgroundColor="lightgreen" hidden/>
      <ScrollView>
        <Pressable onPress={()=>{console.log("text")}}>
       <Text style={{padding:90}}>hii Key Changes:
Imports:

Button should be imported from react-native, not react-native-web.
Styles:

Moved styles into a StyleSheet object for better readability and performance.
Adjusted the ImageBackground and Button styles for a better layout.
Added a semi-transparent background to the container for better text visibility on the image.
Button Usage:

Added onPress prop to the Button for handling button presses.
Notes:
Ensure the image file icon.png exists in the assets directory and the path is correct.
Adjust the styles as needed to fit your design requirements.
Run your app again with these changes. Let me know if you encounter any issues or need further adjustments!Key Changes:
Imports:

Button should be imported from react-native, not react-native-web.
Styles:

Moved styles into a StyleSheet object for better readability and performance.
Adjusted the ImageBackground and Button styles for a better layout.
Added a semi-transparent background to the container for better text visibility on the image.
Button Usage:

Added onPress prop to the Button for handling button presses.
Notes:
Ensure the image file icon.png exists in the assets directory and the path is correct.
Adjust the styles as needed to fit your design requirements.
Run your app again with these changes. Let me know if you encounter any issues or need further adjustments!Key Changes:
Imports:

Button should be imported from react-native, not react-native-web.
Styles:

Moved styles into a StyleSheet object for better readability and performance.
Adjusted the ImageBackground and Button styles for a better layout.
Added a semi-transparent background to the container for better text visibility on the image.
Button Usage:

Added onPress prop to the Button for handling button presses.
Notes:
Ensure the image file icon.png exists in the assets directory and the path is correct.
Adjust the styles as needed to fit your design requirements.
Run your app again with these changes. Let me know if you encounter any issues or need further adjustments!Key Changes:
Imports:

Button should be imported from react-native, not react-native-web.
Styles:

Moved styles into a StyleSheet object for better readability and performance.
Adjusted the ImageBackground and Button styles for a better layout.
Added a semi-transparent background to the container for better text visibility on the image.
Button Usage:

Added onPress prop to the Button for handling button presses.
Notes:
Ensure the image file icon.png exists in the assets directory and the path is correct.
Adjust the styles as needed to fit your design requirements.
Run your app again with these changes. Let me know if you encounter any issues or need further adjustments!Key Changes:
Imports:

Button should be imported from react-native, not react-native-web.
Styles:

Moved styles into a StyleSheet object for better readability and performance.
Adjusted the ImageBackground and Button styles for a better layout.
Added a semi-transparent background to the container for better text visibility on the image.
Button Usage:

Added onPress prop to the Button for handling button presses.
Notes:
Ensure the image file icon.png exists in the assets directory and the path is correct.
Adjust the styles as needed to fit your design requirements.
Run your app again with these changes. Let me know if you encounter any issues or need further adjustments!</Text>   
</Pressable>
       <Button title="submit" onPress={()=>
        {
          console.log("praveen pressed small");
          setmodel(true)
        }
      
       }/>
       </ScrollView>
       <Pressable onLongPress={()=>{console.log("long press")}} onPress={()=>{console.log("image clicked")}}>
       <Image source={Img1} style={{width:300, height:300}}/>
       </Pressable>


       <Modal visible={Modalstatus} animationType="fade" presentationStyle="pageSheet">
        <View style={{padding:90,backgroundColor:"green",flex:1}} >
        <Text>model text</Text>
        <Button onPress={()=>{setmodel(false)}} title="close"/>
        </View>
       </Modal>





       </ImageBackground>
 
  )
}