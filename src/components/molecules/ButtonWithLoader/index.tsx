
import React, { FC } from 'react'
import { PressableBasic, TextBasic } from '@atoms/'
import { colors } from '@src/desingSystem'
import { IPressableBasic } from '@src/typings'

export const ButtonWithLoader :FC<IPressableBasic> = ({handleOnPress,style}) => {
  return (
  <PressableBasic style={style} handleOnPress={handleOnPress}>
    <TextBasic message='Login' />
  </PressableBasic>
  )
}


