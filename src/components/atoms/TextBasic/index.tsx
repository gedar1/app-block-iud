import { StyleSheet, Text } from 'react-native'
import React,{ FC } from 'react'
import { ITextBasic } from '../../../typings/BasicTypes'




export const TextBasic : FC<ITextBasic> =({ children,message } ) => {
  const {container} = styles
  
  return (
    <Text style={container}>
      {message}
      { children }
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default TextBasic