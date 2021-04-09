import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import MainScreen from './Components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/