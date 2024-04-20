import { View, Text } from "react-native";
import React, { FC } from "react";
import { InputText } from "@atoms/";
import { ITextInputWhitIcon } from "@typings/";
import { Entypo  } from "@expo/vector-icons";


export const InputWhitIcon: FC<ITextInputWhitIcon> = ({
  iconColor,
  iconName = "eye-with-line",
  iconSize,
  isShowIcon,
  styleView,
}) => {

  console.log(typeof isShowIcon)
  return (
    <View style={styleView}>
      <InputText  />
      {isShowIcon ? 
        <Entypo
          color={iconColor}
          name={iconName}
          size={iconSize}
        />
      : null} 
    </View>
  );
};


