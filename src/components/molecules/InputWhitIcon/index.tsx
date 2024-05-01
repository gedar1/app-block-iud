import { View, Text } from "react-native";
import React, { FC } from "react";
import { InputText } from "@atoms/";
import { ITextInputWhitIcon } from "@typings/";
import { Entypo  } from "@expo/vector-icons";
import { Icon } from "@src/components/atoms/Icon";


export const InputWhitIcon: FC<ITextInputWhitIcon> = ({
  iconColor,
  iconName = "eye-with-line",
  iconSize,
  isShowIcon,
  styleView,
  placeholder,
  placeholderTextColor
}) => {

  console.log(typeof isShowIcon)
  return (
    <View style={styleView}>
      <InputText  placeholder={placeholder} placeholderTextColor={placeholderTextColor}/>
      {isShowIcon ? 
        <Icon
          iconColor={iconColor}
          iconName={iconName}
          iconSize={iconSize}
        />
      : null} 
    </View>
  );
};


