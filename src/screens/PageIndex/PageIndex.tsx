import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenTemplate } from "@templates/";
import { useBasicContext } from "@context/";
import { ViewBasic } from "@atoms/";

const PageIndex = () => {
  const { message } = useBasicContext();
  return (
    
    <ViewBasic style={styles.container}>
      <ScreenTemplate />
      <View>
      <Text>{message}</Text>
      </View>
    </ViewBasic>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});

export default PageIndex;
