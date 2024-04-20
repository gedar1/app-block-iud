import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PressableBasic, TextBasic } from '@atoms/'
import { colors } from '@src/desingSystem'

export const ButtonWithLoader = () => {
  return (
  <PressableBasic style={styles.pressableBasic}>
    <TextBasic message='Loading...' />
  </PressableBasic>
  )
}

const styles = StyleSheet.create({
  pressableBasic:{
    backgroundColor:colors.primary.base
  }
});
