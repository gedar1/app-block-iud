import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ViewBasic } from "@atoms/";
import { Logo } from "@molecules/";
import { Icon } from "@icon/";
import { moderateScale, verticalScale } from "@metrics/";
import { ViewLinearGradient } from "@src/components/molecules/LinearGradient";
import { colors } from "@desingSystem/";

export const BannerScreen = () => {
  return (
    <ViewLinearGradient
      startColor={colors.primaryRgba[100]}
      // style={styles.containerLinear}
      endColor={colors.primaryRgba[300]}
      styleLinear={styles.containerLinear}
    >
      <ViewBasic style={styles.container}>
        <Logo />
        <Icon iconColor="yellow" iconName="cross" iconSize={30} />
      </ViewBasic>
    </ViewLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: verticalScale(105),
    flexDirection: "row",
    paddingHorizontal: moderateScale(5),
    borderRadius: moderateScale(50),
  },
  containerLinear: {
    display: "flex",
    paddingHorizontal: moderateScale(5),
    justifyContent: "space-between",
    width: "100%",
    height: verticalScale(105),
    flexDirection: "row",
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },
});
