import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { ViewBasic } from '@atoms/'
import { ITemplate } from '@typings/';

const { width, height } = Dimensions.get("window");

const ScreenBackground = ({children,style} :ITemplate) => {
  return (
    <ViewBasic style={style}>
      <ImageBackground
      style={styles.imageBackground}
      source={require('../../../assets/images/app_bg.jpg')}
      >
        {children}
      </ImageBackground>
    </ViewBasic>
  )
}


const styles = StyleSheet.create({
  imageBackground: {
    display: 'flex',
    justifyContent: 'center',
    width: width,
    height: "100%",
    alignItems: "center",
  },
});
export default ScreenBackground