import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ScreenMenu,
  ScreenUnit,
  ScreenstoresExternal,
  ScreenStoresBlock,
  ScreenNotifications,
} from "@screens/";
import React from "react";
// import { useUserDataContext } from '../contexts'

const Stack = createNativeStackNavigator();

export const GlobalNavigation = () => {
  // const { user } = useUserDataContext() ?? {}

  // if (!user?.data) return <ScreenLogin/>

  return (
    <Stack.Navigator
      initialRouteName="ScreenMenu"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ScreenMenu"
        options={{ headerShown: false }}
        component={ScreenMenu}
      />
      <Stack.Screen
        name="ScreenUnit"
        options={{ headerShown: false }}
        component={ScreenUnit}
      />
      <Stack.Screen
        name="ScreenstoresExternal"
        options={{ headerShown: false }}
        component={ScreenstoresExternal}
      />
      <Stack.Screen
        name="ScreenStoresBlock"
        options={{ headerShown: false }}
        component={ScreenStoresBlock}
      />
      <Stack.Screen
        name="ScreenNotifications"
        options={{ headerShown: false }}
        component={ScreenNotifications}
      />
    </Stack.Navigator>
  );
};
