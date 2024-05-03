import {NavigationContainer} from '@react-navigation/native'
import Stack  from './GlobalNavigation'
import React from 'react'

export const RootNavigator = () => {
  return (
        <NavigationContainer>
         <Stack />
        </NavigationContainer>
  )
}

