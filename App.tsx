import { StyleSheet } from 'react-native';

import { ScreenLogin } from '@screens/';
import {BasicProvider} from '@context/';



export default function App() {
 
  return (
    <BasicProvider>
      <ScreenLogin/>
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
