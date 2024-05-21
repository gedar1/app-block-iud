import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScreenMenu,
  ScreenUnit,
  ScreenstoresExternal,
  ScreenStoresBlock,
  ScreenNotifications,
  ScreenLogin,
  ScreenListProduct,
} from "@screens/";


// import { useUserDataContext } from '../contexts'
const Stack = createStackNavigator();

export const GlobalNavigation = () => {
  // const { user } = useUserDataContext() ?? {}

  // if (!user?.data) return <ScreenLogin/>

  return (
    <Stack.Navigator
      initialRouteName="ScreenLogin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ScreenLogin"
        options={{ headerShown: false }}
        component={ScreenLogin}
      />
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
      <Stack.Screen
        name="ScreenListProduct"
        options={{ headerShown: false }}
        component={ScreenListProduct}
      />
    </Stack.Navigator>
  );
};
export default GlobalNavigation;