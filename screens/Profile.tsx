import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#ffffff' }}>Profile Screen</Text>
      <Text style={{ color: '#ffffff' }}>This is the profile screen.</Text>
      <Text style={{ color: '#ffffff' }}>You can edit your profile here.</Text>
      <Text style={{ color: '#ffffff' }}>More features coming soon!</Text>
      <Text style={{ color: '#ffffff' }}>Stay tuned!</Text>
      <Text style={{ color: '#ffffff' }}>Thank you for using our app!</Text>
      <Text style={{ color: '#ffffff' }}>We appreciate your support!</Text>
      <Text style={{ color: '#ffffff' }}>Have a great day!</Text>
      <Text style={{ color: '#ffffff' }}>Goodbye!</Text>

              <Image
                source={require('./../assets/plane3.png')}
                style={{ width: 100, height: 60, tintColor: 'red' }}
              />
    </View>
  )
}

const styles = StyleSheet.create({})