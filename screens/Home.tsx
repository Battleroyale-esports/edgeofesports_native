import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../global'

export default function Home({navigation}: {navigation: BottomTabNavigationProp<BottomTabParamList, 'Home'>}) {

  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 70 }}>
      <View style={{ paddingHorizontal: 10}}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#ffffff' }}>Home Screen</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  // container: {backgroundColor: g.background.light},
})