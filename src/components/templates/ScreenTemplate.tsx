import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {ButtonBasic, TextBasic,ViewBasic, PressableBasic} from '@atoms/';
import { colors } from '@colors/';
import { getInfo } from '@services/';



export const ScreenTemplate = () => {
  const handlePress = () => {
    console.log('en handlePress')

    getInfo()
  }
  return (
    <View style={styles.container}>
      <ViewBasic style={styles.viewbasic}>
      <TextBasic message='Text Basic'/>
      </ViewBasic>
      <ViewBasic style={styles.viewButton}>
      <ButtonBasic 
      title='Click Me'
      color={colors.primary.base}
      handleOnPress={handlePress}
      />
      </ViewBasic>
      <PressableBasic
      style= {styles.pressableStyle}
      >
      <TextBasic message='Pressable'/>
      </PressableBasic>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'80%',
    height:'80%',
    backgroundColor:colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewbasic:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:colors.blue_Rgba_050
  },
  viewButton:{
    marginTop:10,
    borderRadius:10,
    
  },
  pressableStyle:{
    marginTop:10,
    width:'90%',
    height:'5%',
    borderRadius:10,
    backgroundColor:colors.primary.base
  }
});