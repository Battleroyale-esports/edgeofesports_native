import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '../redux/hooks';
import { toggleTheme } from '../redux/slice/themeSlice';
import TopBar from '../components/TopBar';

export default function Home() {


  const dispatch = useAppDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ScrollView>
      <TopBar />
      <Text>Home</Text>
      {/* <Pressable
        onPress={handleToggleTheme}
        style={{
          backgroundColor: '#A27B5C',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          height: 50,
        }}
      /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#222831'},
})