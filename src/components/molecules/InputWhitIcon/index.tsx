import { View, Text } from "react-native";
import React from "react";
import { InputText } from "@atoms/";
import { ITextInputWhitIcon } from "@typings/";
import { Entypo } from "@expo/vector-icons";


const InputWhitIcon = ({
  iconColor,
  iconName = "eye-with-line",
  iconSize,
  isShowIcon,
  styleView,
  textInputProps
}: ITextInputWhitIcon) => {

  console.log(typeof isShowIcon)
  return (
    <View style={styleView}>
      <InputText {...textInputProps} />
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

export default InputWhitIcon;
