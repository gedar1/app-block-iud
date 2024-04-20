import { Button, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { IButtonBasic } from '@src/typings/BasicTypes'

export const ButtonBasic : FC<IButtonBasic> = ({handleOnPress, color, title}) => {
  return (
   <Button
   title={title}
   onPress={handleOnPress}
   color={color}
   />
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red'
    }
})