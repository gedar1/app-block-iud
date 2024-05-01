import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ViewBasic, TextBasic } from '@atoms/'
import { Icon } from '@icon/'

export const Logo = () => {
  return (
    <ViewBasic>
      <Icon iconColor='blue' iconName='email' iconSize={20}></Icon>
      <TextBasic message='App Block Sales'/>
    </ViewBasic>
  )
}



const styles = StyleSheet.create({})