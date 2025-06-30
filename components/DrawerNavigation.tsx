import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../global';
import Home from '../screens/Home';
import BottomTabs from './BottomTabs';
import Profile from '../screens/Profile';

import Icon from '@react-native-vector-icons/fontawesome6';

const Drawer= createDrawerNavigator<DrawerParamList>();

function DrawerHeader({navigation}: {navigation: DrawerNavigationProp<DrawerParamList>}) {
  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  }
  return(
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {/* <Image source={require('./../plane.png')} style={styles.img} /> */}
        <Icon name='bars' size={20} color={'#FFF'} iconStyle='solid' onPress={handleToggleDrawer} />
      </View>
    </View>
  )
}

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      backBehavior='history'
      screenOptions={{
        headerShown: true,
        header: ({navigation})=>{
          const typedNavigation = navigation as DrawerNavigationProp<DrawerParamList>;
          return (
          <DrawerHeader navigation={typedNavigation} />
        )},
        headerStyle: {
          borderRadius: 50,
        },
        drawerStyle: {
          backgroundColor: '#91C8E4',
          width: 280,
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
        name="DProfile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#222831',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
  img: {
    width: 200,
    height: 100,
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 5,
  }
})