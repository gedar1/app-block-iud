import { SafeAreaView, StyleSheet, Dimensions, Button } from "react-native";
import React, { FC } from "react";
import { colors } from "@src/desingSystem";
import { FormLogin } from "@organisms/";
import { ScreenBackground } from "@templates/";

const { width, height } = Dimensions.get("window");

export const ScreenLogin = () => {
  const handleOnPress = () => {
    console.log('hollallal')
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

