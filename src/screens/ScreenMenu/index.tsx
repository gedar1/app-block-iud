import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { ScreenBackground } from '@templates/'
import { Menu } from '@organisms/'
import { colors } from '@desingSystem/';


const { width, height } = Dimensions.get("window");

export const ScreenMenu  = () => {
  return (
    <ScreenBackground style={styles.container} styleContent={styles.content}>
      <Menu/>
    </ScreenBackground>
  )
}



const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    display:'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.gray[25]
  },
  content: {
    width: width,
    height: "100%",
    display:'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.gray[25]
  },
})