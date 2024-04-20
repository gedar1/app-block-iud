import { Pressable } from 'react-native'
import React, { FC } from 'react'
import { IPressableBasic } from '@typings/'

export const PressableBasic : FC<IPressableBasic> = ({style,children} ) => {
  return (
    <Pressable 
        style={style}
    >
       {children}
    </Pressable>

  )
}

