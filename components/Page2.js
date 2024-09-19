import React from 'react'
import { Alert } from 'react-native'
import { Button } from 'react-native'
import { View } from 'react-native'
import { Text,ActivityIndicator } from 'react-native'

export const Page2 = () => {
  return (
    <View>
        <ActivityIndicator color="black" size="small" />
        <Button title='submit' onPress={()=> Alert.alert("inavlid surname","inavlid dob",[

            {
                text:'Ok',
            },
            {
                text:"cancelpraveen",
            }
            
        ])
            
        }/>
    </View>
  )
}
