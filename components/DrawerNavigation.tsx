import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../global';
import Home from '../screens/Home';
import BottomTabs from './BottomTabs';

const Drawer= createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      backBehavior='history'
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#91C8E4',
          width: 240,
        },
        drawerActiveTintColor: '#222831',
        drawerInactiveTintColor: '#393E46',
      }}
    >
      <Drawer.Screen
        name="DHome"
        component={BottomTabs}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="DSearch"
        component={() => <View><Text>Search Screen</Text></View>}
        options={{ drawerLabel: 'Search' }}
      />
      <Drawer.Screen
        name="DNotifications"
        component={() => <View><Text>Notifications Screen</Text></View>}
        options={{ drawerLabel: 'Notifications' }}
      />
      <Drawer.Screen
        name="DProfile"
        component={() => <View><Text>Profile Screen</Text></View>}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})