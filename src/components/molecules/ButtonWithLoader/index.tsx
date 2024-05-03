
import React, { FC } from 'react'
import { PressableBasic, TextBasic } from '@atoms/'
import { colors } from '@src/desingSystem'
import { IPressableBasic } from '@src/typings'

export const ButtonWithLoader :FC<Partial<IPressableBasic>> = ({style,styleText,navigateTo, handleOnPress}) => {
  
 
  return (
  <PressableBasic style={style}  navigateTo={navigateTo} handleOnPress={()=>handleOnPress?.()}>
    <TextBasic message='Login' style={styleText}/>
  </PressableBasic>
  )
}


