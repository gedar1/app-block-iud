import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from "react-native";
import React, { PropsWithChildren } from "react";
import { ViewBasic } from "@atoms/";
import { ITemplate } from "@typings/";
import { BannerScreen } from "@organisms/";
import { moderateScale } from "@metrics/";


const { width, height } = Dimensions.get("window");

const ScreenBackground = ({ children, style, styleContent}: ITemplate) => {
  return (
    <SafeAreaView style={styles.containerSafeAreaView} >
    <ViewBasic style={style}>
      <BannerScreen />
      <ViewBasic style= {styleContent}>{children}</ViewBasic>
    </ViewBasic>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    paddingTop:moderateScale(25)
  },
});
export default ScreenBackground;
