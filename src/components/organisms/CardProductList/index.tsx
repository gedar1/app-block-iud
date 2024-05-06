

import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollViewList } from "@templates/";
import { CardProduct } from '../CardProduct';

const { width, height } = Dimensions.get("window");

export const CardProductList = () => {
  return (
    <ScrollViewList>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
    </ScrollViewList>
  )
}



const styles = StyleSheet.create({})