import { SafeAreaView, StyleSheet, Dimensions, Button, Text } from "react-native";
import React, { FC, useState } from "react";
import { colors } from "@src/desingSystem";
import { FormLogin } from "@organisms/";
import { ScreenBackground } from "@templates/";
import { getInfo} from '@services/'

const { width, height } = Dimensions.get("window");

export const ScreenLogin = () => {
 
  const handleOnPress = () => {
    console.log('Screen Login')
    getInfo(7)
  }
  return (
      <ScreenBackground style={styles.container} styleContent={styles.content}>
        
        <FormLogin navigateTo={'ScreenMenu'} handleOnPressNavigation={handleOnPress}/>       
      </ScreenBackground>
  );
};

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
    justifyContent: "center",
    backgroundColor: colors.gray[25]
  },
});

