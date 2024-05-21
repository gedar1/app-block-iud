import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { FC } from 'react'
import { IStoreTemplate } from '@typings/';
import { ViewBasic } from '@atoms/';
import { ScrollViewList } from '@organisms/';
import { ListCard, ListDetail } from '@molecules/';

const { width, height } = Dimensions.get("window");

export const StoreTemplate : FC<Partial <IStoreTemplate>> = ( {typeTemplate}) => {
  
  return (
    <ScrollViewList>
      {typeTemplate === 'listCard' ? <ListCard nameProduct={'Bandeja Paisa'} price={20000} description={'arroz ,frijole,chicharron,tajada ensalada'}/> : <ListDetail/>}
    </ScrollViewList>
  )
}

const styles = StyleSheet.create({})