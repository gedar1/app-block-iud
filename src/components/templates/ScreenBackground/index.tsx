import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { ViewBasic } from '@atoms/'
import { ITemplate } from '@typings/';
import { BannerScreen } from '@organisms/';

const { width, height } = Dimensions.get("window");

const ScreenBackground = ({children,style} :ITemplate) => {
  return (
    <ViewBasic style={style}>
      <BannerScreen/>
      {children}
    </ViewBasic>
  )
}


const styles = StyleSheet.create({
  imageBackground: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: width,
    height: "100%",
    alignItems: "flex-start",
    backgroundColor:'gray'
  },
});
export default ScreenBackground