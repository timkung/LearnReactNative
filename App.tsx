import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import PizzaTranslator from './components/PizzaTranslator/PizzaTranslator';
import HomeScreen from './components/Screen/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Pizza: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Pizza" component={PizzaTranslator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
