import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { ScreenLogin } from '@screens/';
import {BasicProvider} from '@context/';
import { NavigationContainer } from '@react-navigation/native'
import { HandlerNavigation } from '@navigation/';



export default function App() {
 
  return (
    <BasicProvider>
      <NavigationContainer>
        <HandlerNavigation/>
      </NavigationContainer>
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
