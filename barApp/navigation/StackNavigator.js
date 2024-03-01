import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SubmitDrinkScreen from '../screens/SubmitDrinkScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SubmitDrink" component={SubmitDrinkScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
