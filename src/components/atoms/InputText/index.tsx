import { View, Text, TextInput } from "react-native";
import React from "react";
import { ITextInputBasic } from "@src/typings";

const index = ({
  autocapitalize = "none",
  handleOnChange,
  placeholder,
  placeholderTextColor,
  secureText,
  style,
  value,
}: ITextInputBasic) => {
  return (
      <TextInput
        autoCapitalize={autocapitalize}
        onChangeText={handleOnChange}
        placeholder={placeholder}
        placeholderTextColor={ placeholderTextColor }
        secureTextEntry={secureText}
        style={style}
        value={value}
        
      />  
  );
};

export default index;
