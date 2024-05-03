import { View, Text } from "react-native";
import React, { FC } from "react";
import { Entypo  } from "@expo/vector-icons";
import { IIconType } from "@src/typings";


export const Icon: FC<Partial<IIconType>> = ({
  iconColor,
  iconName ,
  iconSize,
  styleViewIcon,
  isSvg,
  children,
  handleOnPress,
  navigator,
  navigateTo 
}) => {

  const { navigation} = navigator ??{}

  handleOnPress = () => {
    navigation?.navigate(`${navigateTo}`)
  }
  return (
    <View style={styleViewIcon}>
        {!isSvg ? (<Entypo
          color={iconColor}
          name={iconName}
          size={iconSize}
          onPress={handleOnPress}
        />) : children}
    </View>
  );
};