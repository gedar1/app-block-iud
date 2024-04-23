import { Pressable } from 'react-native'
import React, { FC } from 'react'
import { IPressableBasic } from '@typings/'

export const PressableBasic : FC<IPressableBasic> = ({style,children,handleOnPress} ) => {
  return (
    <Pressable 
        style={style}
        onPress={()=>handleOnPress()}
    >
       {children}
    </Pressable>

  )
}

