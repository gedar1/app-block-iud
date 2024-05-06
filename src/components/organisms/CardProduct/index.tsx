import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, textBasic } from '@desingSystem/'
import { moderateScale } from '@metrics/'
import { Icon, TextBasic, ViewBasic } from '@atoms/'

const { width, height } = Dimensions.get("window");


export const CardProduct = () => {
  return (
    <ViewBasic style={styles.container}>
    <ViewBasic style={styles.containerHeader}>
      <Icon iconName="chevron-thin-right" iconSize={24} iconColor={colors.white} />
      <TextBasic message={'NameStore'} style={{color: colors.white,...textBasic.xs}}/>
    </ViewBasic>
    <ViewBasic style={styles.containerBody}>
      <TextBasic message="ImagenProducto" style={{...textBasic.xs}}/>
    </ViewBasic>
    <ViewBasic style={styles.containerFooter}>
      <Icon iconName="phone" iconSize={24} iconColor={colors.white} />
      <TextBasic message={'32020202020'} style={{color: colors.white,...textBasic.xs}}/>
      <TextBasic message={'calificacion'} style={{color: colors.white,...textBasic.xs}}/>
    </ViewBasic>
  </ViewBasic>
  )
}



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gray[25],
    borderColor: colors.green.base,
    
    borderRadius: moderateScale(21),
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "space-between",
    width: moderateScale(300),
  },
  containerHeader: {
    alignItems: "center",
    backgroundColor: colors.primary[500],
    borderTopLeftRadius: moderateScale(21),
    borderTopRightRadius: moderateScale(21),
    display: "flex",
    flexDirection: "row",
    gap: moderateScale(8),
    height: height * 0.0639,
    justifyContent: "flex-start",
    paddingHorizontal: width * 0.0416,
    width: "100%",
  },
  containerBody: {
    alignItems: "center",
    backgroundColor: colors.gray[25],
    borderRadius: moderateScale(21),
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.0416,
    paddingVertical: width * 0.0416,
    width: moderateScale(300),
  },
  containerFooter: {
    alignItems: "center",
    backgroundColor: colors.primary[500],
    borderBottomLeftRadius: moderateScale(21),
    borderBottomRightRadius: moderateScale(21),
    display: "flex",
    flexDirection: "row",
    gap: moderateScale(8),
    height: height * 0.0639,
    justifyContent: "space-between",
    paddingHorizontal: width * 0.0416,
    width: "100%",
  },
})