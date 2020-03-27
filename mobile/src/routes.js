import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents/index.js';
import Detail from './pages/Detail/index.js';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Incidents' component={Incidents} />
        <AppStack.Screen name='Detail' component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
