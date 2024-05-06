import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { ScreenLogin } from '@screens/';
import {BasicProvider} from '@context/';

import { RootNavigator } from '@navigation/';






export default function App() {
 
  return (
    <BasicProvider>
        <RootNavigator/>    
    </BasicProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
