import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Importing our screens
import Home from './src/screens/Home';
import Animation from './src/screens/Animation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animation" component={Animation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
