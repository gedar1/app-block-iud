
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { handleOnNavigation } from '../utils/helpers/helps';

export interface  IViewBasic  {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}
export interface IViewLinearGradient extends IViewBasic {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    styleLinear?: StyleProp<ViewStyle>;
    startColor:string
    endColor:string
}

export type ScreenName = 'ScreenNotifications' | 'ScreenLogin' | 'ScreenMenu' | 'ScreenUnit' | 'ScreenstoresExternal' | 'ScreenStoresBlock';
export interface ITextBasic {
    children: ReactNode;
    style:StyleProp<TextStyle>
    message:string
}

export interface ITextInputBasic {
    children?: ReactNode
    style?:StyleProp<TextStyle>
    placeholder?: string,
    placeholderTextColor?: string, 
    value?: string | undefined, 
    handleOnChange?(value: any): void,
    secureText?: boolean,
    color?: string
    keyboardType?:"default"|"numeric"|"email-address"|"phone",
    maxLength?:number,
    autocapitalize?: 'none'| 'sentences'| 'words'| 'characters'
}

export interface ITextInputWhitIcon extends ITextInputBasic {
    iconColor:string
  iconName?: any
  iconSize?: number
  isShowIcon?: boolean
  styleView?: StyleProp<ViewStyle>
}
export interface IIconType {
iconColor:string
  iconName?: any
  iconSize?: number
  styleViewIcon?: StyleProp<ViewStyle>
  children?: ReactNode
  isSvg:boolean
  handleOnPress: () => void
  navigateTo: string 
  navigator: StackScreenProps<any,any>
}
export interface IButtonBasic {
    title: string;
    color: string;
    handleOnPress : () => void;
    navigateTo: string 
    handleOnPressComponent: () => void;
}
export interface IPressableBasic {
    borderless: boolean;
    color: string;
    radius: number;
    foreground: boolean;
    children: ReactNode;
    handleOnPressComponent: () => void;
    handleOnPress: () => void;
    handleOnPressIn?: () => void;
    handleOnPressOut?: () => void;
    style: StyleProp<ViewStyle>;
    styleText : StyleProp<TextStyle>
    navigateTo: string 
    navigation: StackNavigationProp<any,any,any>;
}

export interface ITemplate {
    children?: ReactNode;
    style?:StyleProp<TextStyle>
    styleContent?:StyleProp<ViewStyle>
    message?:string
}

export interface INavigationType {
    navigateTo: string 
    navigation: StackNavigationProp<any,any,any>;
    route: RouteProp<any,any>;
    handleOnPressNavigation: () => void;
}