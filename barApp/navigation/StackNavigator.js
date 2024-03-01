import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SubmitDrinkScreen from '../screens/SubmitDrinkScreen';
import styles from '../styles';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator style={styles.navBar} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SubmitDrink" component={SubmitDrinkScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
