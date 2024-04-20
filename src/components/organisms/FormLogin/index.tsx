import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import {InputWhitIcon}  from "@molecules/";
import { ITextInputBasic } from "@typings/";
import { colors } from "@src/desingSystem";
import {ButtonWithLoader} from "@molecules/";
import { InputText } from "@atoms/";



const { width, height } = Dimensions.get("window");

const FormLogin = () => {
  // const configTextInputPassword: ITextInputBasic = {
  //   placeholder: "enter",
  //   placeholderTextColor: "gray",
  //   style: styles.inputStyle,
  // };

  return (
    <View style={styles.container}>
      <InputText
        style={styles.inputStyle}
        placeholder="UserName"
        placeholderTextColor="gray"      
      />
      <InputWhitIcon
        iconColor="white"
        iconName="eye"
        iconSize={20}
        isShowIcon={true}
        placeholder="password"
        placeholderTextColor="gray"       
        styleView={styles.inputStyleIcon}
      />
      <ButtonWithLoader/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "#bbb",
    borderRadius: width * 0.0194,
    borderWidth: 1, 
    display: "flex",
    height: 'auto',
    justifyContent: "center",
    padding:10,
    rowGap:20,
    width: "90%",
  },
  inputStyle: {
    height: height * 0.0639,
    paddingLeft: width * 0.0416,
    width: "90%",
    color: "white",
  },
  inputStyleIcon: {
    alignItems: 'center',
    borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    borderWidth: 1,
    display:'flex',
    flexDirection:"row",
    height:height * 0.0639,
    width: "80%",
    
  },
});

export default FormLogin;
