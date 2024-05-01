import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colors } from "@src/desingSystem";
import { FormLogin } from "@organisms/";
import { TextBasic } from "@atoms/";
import { ScreenBackground } from "@templates/";
import { moderateScale } from "@metrics/";


const { width, height } = Dimensions.get("window");

export const ScreenLogin = () => {
  return (
    <SafeAreaView style={styles.containerSafeAreaView} >
      <ScreenBackground style={styles.container} >
        <FormLogin/>
        <TextBasic message="AppBlockSales"/>
      </ScreenBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    paddingTop:moderateScale(25)
  },
  container: {
    width: width,
    height: "100%",
    display:'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white
  },
});

