import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Drink List"
        onPress={() => navigation.navigate('SubmitDrink')}
      />
    </View>
  );
};

export default HomeScreen;
