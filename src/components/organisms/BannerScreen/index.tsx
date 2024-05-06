import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ViewBasic } from "@atoms/";
import { Logo } from "@molecules/";
import { Icon } from "@icon/";
import { moderateScale, verticalScale } from "@metrics/";
import { ViewLinearGradient } from "@src/components/molecules/LinearGradient";
import { colors } from "@desingSystem/";
import { useBasicContext } from "@context/";

export const BannerScreen = () => {

  const { setUser } = useBasicContext();
  const handlePress = () => {
    console.log("hola");
    setUser(true);
  };
  return (
    <ViewLinearGradient
      startColor={colors.primaryRgba[100]}
      endColor={colors.primaryRgba[300]}
      styleLinear={styles.containerLinear}
    >
      <ViewBasic style={styles.container}>
        <Logo />
        <Icon
          iconColor={colors.white}
          iconName="arrow-with-circle-left"
          iconSize={40}
          isSvg={false}
          isGoToBack={true}
        />
      </ViewBasic>
    </ViewLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
