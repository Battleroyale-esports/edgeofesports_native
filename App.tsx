
import { createStackNavigator } from '@react-navigation/stack';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from './redux/hooks';
import { RootStackParamList } from './global';
import { g } from './constants/global';
import BottomTabs from './components/BottomTabs';
import DrawerNavigation from './components/DrawerNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useAppSelector((state) => state.themeSlice.theme) === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View
        style={[
          styles.statusBarBackground,
          { backgroundColor: isDarkMode ? '#91C8E4' : '#91C8E4' },
        ]}
      />

      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              headerStyle: { backgroundColor: '#A27B5C' },
              cardStyle: { backgroundColor: g.background[isDarkMode ? 'dark' : 'light'] },
            }}
            initialRouteName="Tab"
          >
            <Stack.Screen name="Tab" component={DrawerNavigation} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  statusBarBackground: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
});

export default App;
