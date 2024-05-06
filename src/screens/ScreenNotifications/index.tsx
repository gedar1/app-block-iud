import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenBackground } from "@templates/";
import { Notification } from "@molecules/";
import { NotificationList } from "@organisms/";
import { colors } from "@desingSystem/";


const { width, height } = Dimensions.get("window");

export const ScreenNotifications = () => {
  return (
    <ScreenBackground style={styles.container} styleContent={styles.content}>
      <NotificationList/>
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
