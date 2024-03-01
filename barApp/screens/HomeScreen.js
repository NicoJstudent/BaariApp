import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Drink List"
        onPress={() => navigation.navigate('SubmitDrink')}
      />
    </View>
  );
};

export default HomeScreen;
