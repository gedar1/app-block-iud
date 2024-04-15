import { Pressable } from 'react-native'
import React from 'react'
import { IPressableBasic } from '@typings/'

const PressableBasic = ({style,children} : IPressableBasic ) => {
  return (
    <Pressable 
        style={style}
    >
       {children}
    </Pressable>

  )
}

export default PressableBasic