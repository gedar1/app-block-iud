import { Button, StyleSheet } from 'react-native'
import React from 'react'
import { IButtonBasic } from '@src/typings/BasicTypes'


const ButtonBasic= ({handleOnPress, color, title} : IButtonBasic) => {
  return (
   <Button
   title={title}
   onPress={handleOnPress}
   color={color}
   />
  )
}

export default ButtonBasic

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red'
    }
})