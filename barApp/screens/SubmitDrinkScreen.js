import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles';

const SubmitDrinkScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [newRecipe, setNewRecipe] = useState('');
  
    const handleSubmit = () => {
      console.log('Name:', name);
      console.log('newRecipe:', newRecipe);
      setName('');
      setNewRecipe('');
    }
  return (
    <View style={styles.container}>
    <Text>Submit Drink Screen</Text>
    <View style={styles.formItem}>
      <Text>Drinkin nimi:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="..."
      />
    </View>
    <View style={styles.formRecipe}>
      <Text>Drinkin resepti:</Text>
      <TextInput
        style={[styles.input, { height: 50, width: 300}]}
        value={newRecipe}
        onChangeText={text => setNewRecipe(text)}
        placeholder="Kirjoita resepti tähän..."
        multiline={true}
      />
    </View>
    <Button style={styles.button} title="Submit" onPress={handleSubmit} />
  </View>
  );
};

export default SubmitDrinkScreen;
