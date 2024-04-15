import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IViewBasic {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export interface ITextBasic {
    children?: ReactNode;
    style?:StyleProp<TextStyle>
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
export interface IButtonBasic {
    title: string;
    color: string;
    handleOnPress : () => void;
}
export interface IPressableBasic {
    borderless?: boolean;
    color?: string;
    radius?: number;
    foreground?: boolean;
    children: ReactNode;
    handleOnPress?: () => void;
    handleOnPressIn?: () => void;
    handleOnPressOut?: () => void;
    style: StyleProp<ViewStyle>;
}

export interface ITemplate {
    children?: ReactNode;
    style?:StyleProp<TextStyle>
    message?:string
}