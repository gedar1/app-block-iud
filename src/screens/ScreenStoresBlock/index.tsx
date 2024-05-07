import React from "react";
import { colors } from "@desingSystem/";
import { CardProductList, ScreenBackground } from "@templates/";
import { Dimensions, StyleSheet } from "react-native";


 const { width, height } = Dimensions.get("window");

export const ScreenStoresBlock = () => {
  return (
    <ScreenBackground style={styles.container} styleContent={styles.content}>
      <CardProductList/>
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
    justifyContent: "flex-start",
    backgroundColor: colors.gray[25]
  },
});
