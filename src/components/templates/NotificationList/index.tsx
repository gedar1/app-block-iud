import { colors } from "@desingSystem/";
import { moderateScale, verticalScale } from "@metrics/";
import { Notification } from "@molecules/";
import { ScrollViewList } from "@organisms/";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
export const NotificationList = () => {
  return (

    <ScrollViewList>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        </ScrollViewList>
  );
};

const styles = StyleSheet.create({
  notificationListContainer: {
    width: width,
    // height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray[25],
  },
  scrollView: {
    backgroundColor: colors.gray[25],
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    display: "flex",
    gap: moderateScale(15),   
    // height:hightVerticalScale(80),
    marginTop:verticalScale(12),
    alignItems: "center",
  },
});
