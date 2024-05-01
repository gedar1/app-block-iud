import { View, Text } from "react-native";
import React, { FC } from "react";

import { Entypo  } from "@expo/vector-icons";
import { IIconType } from "@src/typings";


export const Icon: FC<IIconType> = ({
  iconColor,
  iconName ,
  iconSize,
  styleViewIcon,
  
}) => {

  return (
    <View style={styleViewIcon}>
        <Entypo
          color={iconColor}
          name={iconName}
          size={iconSize}
        />
    </View>
  );
};