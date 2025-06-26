import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../global';
import { g } from '../constants/global';
import { useAppSelector } from '../redux/hooks';
import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {

  const theme = useAppSelector((state) => state.themeSlice.theme);
  return (
    <Tab.Navigator
      backBehavior='history'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#91C8E4',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarActiveTintColor: '#222831',
        tabBarInactiveTintColor: '#393E46',
        sceneStyle: { backgroundColor: g.background[theme === 'dark' ? 'dark' : 'light'] },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Search"
        component={() => <View><Text>Search Screen</Text></View>}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={() => <View><Text>Notifications Screen</Text></View>}
        options={{
          tabBarLabel: 'Notifications',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})