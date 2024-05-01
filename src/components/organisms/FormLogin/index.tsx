import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import {InputWhitIcon}  from "@molecules/";
import { colors } from "@src/desingSystem";
import {ButtonWithLoader} from "@molecules/";
import { ButtonBasic, InputText } from "@atoms/";
import { useBasicContext } from '@context/'
import { moderateScale } from "@metrics/";



const { width, height } = Dimensions.get("window");

const FormLogin = () => {
  const {setUser} = useBasicContext()
  const handleButtonLogin = () => {
    console.log('hola')
      setUser(true)
  }
  // const configTextInputPassword: ITextInputBasic = {
  //   placeholder: "enter",
  //   placeholderTextColor: "gray",
  //   style: styles.inputStyle,
  // };

  return (
    <View style={styles.container}>
      <InputText
        style={styles.inputStyle}
        placeholder="username"
        placeholderTextColor={colors.gray[100]}     
      />
      <InputWhitIcon
        iconColor={colors.primary.base}
        iconName="eye-with-line"
        iconSize={20}
        isShowIcon={true}
        placeholder="password"
        placeholderTextColor={colors.gray[100]}       
        styleView={styles.inputStyleIcon}
      />
      <ButtonWithLoader handleOnPress={handleButtonLogin} style={styles.pressableBasic}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    borderWidth: 1, 
    display: "flex",
    height: 'auto',
    justifyContent: "center",
    paddingHorizontal:moderateScale(10),
    paddingVertical:moderateScale(40),
    rowGap:20,
    width: "90%",
  },
  inputStyle: {
    borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    borderWidth: 1,
    color: "white",
    height: height * 0.0639,
    paddingLeft: width * 0.0416,
    width: "80%",
  },
  inputStyleIcon: {
    alignItems: 'center',
    borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    borderWidth: 1,
    display:'flex',
    flexDirection:"row",
    justifyContent: 'space-between',
    height:height * 0.0639,
    paddingLeft: width * 0.0416,
    paddingRight: width * 0.0416,
    width: "80%",
    
  },
  pressableBasic:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.primary[400],
    borderRadius: width * 0.0194,
    display:'flex',
    height:height * 0.0639,
    paddingLeft: width * 0.0416,
    width: moderateScale(150), 
  }
});

export default FormLogin;
