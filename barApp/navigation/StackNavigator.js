import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SubmitDrinkScreen from '../screens/SubmitDrinkScreen';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Nuoli navgation bariin
import styles from '../styles';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#abcdef' },
        headerTintColor: '#57384e',
        headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Cocktail List"
        component={HomeScreen}
        options={{
          title: 'Cocktail List',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}
              onPress={() => navigation.navigate('SubmitDrink')}
            >
              <Text style={{ color: '#57384e', fontSize: 20, fontWeight: 'bold', marginRight: 5 }}>Submit Drink</Text>
              <MaterialIcons name="arrow-forward" size={24} color="#57384e" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="SubmitDrink" component={SubmitDrinkScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
