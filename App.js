import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import HomePage from './pages/HomePage';
import Answers from './pages/Answers';
import Personas from './pages/Personas';
import Magician from './pages/Magician';
import Justice from './pages/Justice';
import Ose from './pages/Ose';

import SocialLinksIcon from './assets/socialinks.png';
import Book from './assets/book.png';
import JackFrostIcon from './assets/JackFrostIcon.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#1269cc' }, tabBarActiveTintColor: '#ffffff' }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Social Links',
          tabBarIcon: ({ color }) => (
            <Image source={SocialLinksIcon} style={{ tintColor: color, width: 30, height: 20 }} />
          ),
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        }}
      />
      <Tab.Screen
        name="Answers"
        component={Answers}
        options={{
          title: 'Answers',
          tabBarIcon: ({ color }) => (
            <Image source={Book} style={{ tintColor: color, width: 30, height: 20 }} />
          ),
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        }}
      />
      <Tab.Screen
        name="Personas"
        component={Personas}
        options={{
          title: 'Personas',
          tabBarIcon: ({ color }) => (
            <Image source={JackFrostIcon} style={{ tintColor: color, width: 30, height: 30 }} />
          ),
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Magician" component={Magician} options={{ headerShown: false }}/>
        <Stack.Screen name="Justice" component={Justice} options={{ headerShown: false }}/>
        <Stack.Screen name="Ose" component={Ose} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}