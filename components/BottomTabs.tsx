import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../global';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import AviatorGameT from '../screens/Aviator';
import Chats from '../screens/bottom-tab/Chats';
import CrashGameAnimation from '../aviator/Crash';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={[
              styles.tabButton,
            ]}
          >
            <View style={
              isFocused && styles.tabButtonActive}>
              <Text style={{fontSize: 22}}>{route.name === 'Home' ? '🏠' : route.name === 'Profile' ? '🍔' : route.name === 'Chats' ? '💬' : route.name === 'Aviator' ? '✈️' : '🎮'}</Text>
              <Text style={[styles.tabLabel, { color: '#393E46', fontSize: 11, fontWeight: 'bold' }]}>
                {`${label}`}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default function BottomTabs() {

  return (
    <Tab.Navigator
      backBehavior='history'
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        // tabBarStyle: {
        //   backgroundColor: '#91C8E4',
        //   borderTopWidth: 0,
        //   position: 'absolute',
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        // },
        // tabBarActiveBackgroundColor: '#000000',
        // tabBarInactiveBackgroundColor: '#91C8E4',
        // tabBarActiveTintColor: '#91C8E4',
        // tabBarInactiveTintColor: '#393E46',
        sceneStyle: { backgroundColor: '#000000'},
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🍔</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>💬</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Aviator"
        component={AviatorGameT}
        options={{
          tabBarLabel: 'Aviator',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>✈️</Text>
          ),
        }}
      />
      <Tab.Screen
        name="AviatorAnimation"
        component={CrashGameAnimation}
        options={{
          tabBarLabel: 'Games',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🎮</Text>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#91C8E4',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabButtonActive: {
    backgroundColor: '#91C8E4',
    width: 65,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 15, // lift upward
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    display: 'flex',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
})