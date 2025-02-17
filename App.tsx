import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadingSection from './screens/ReadingSection';
import ListeningSection from './screens/ListeningSection';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true); // 모든 경고 메시지 숨김


const Tab = createBottomTabNavigator();


export default function App() {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Reading"
        screenOptions={{
          tabBarStyle: styles.tabBar,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Reading"
          component={ReadingSection}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="book" color={color} size={24} />
            ),
            tabBarLabel: "Reading",
          }}
        />
        <Tab.Screen
          name="Listening"
          component={ListeningSection}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="headset" color={color} size={24} />
            ),
            tabBarLabel: "Listening",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
