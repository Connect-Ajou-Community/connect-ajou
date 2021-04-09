import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeTab from './HomeTabF';
import CommunityTab from './CommunityTabF';
import TimetableTab from './TimetableTab';
import AlarmTab from './AlarmTab';
import UserTab from './UserTab';

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    CommunityTab: { screen: CommunityTab },
    TimetableTab: {screen: TimetableTab},
    AlarmTab: {screen: AlarmTab},
    UserTab: {screen: UserTab}
    
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    render() {
        return <AppTabContainet />; // AppTabContainet 컴포넌트를 리턴한다.
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});