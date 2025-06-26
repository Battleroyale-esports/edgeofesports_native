import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { g } from '../constants/global'

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hamburger</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: g.color.info,
        padding: 10,
        margin: 10,
        borderRadius: 50,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
    },
})