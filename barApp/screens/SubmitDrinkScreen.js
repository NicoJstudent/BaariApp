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
    <Text style={styles.h1}>Submit new cockai</Text>
    <View style={styles.formText}>
      <Text style={styles.inputHeader}>Cocktail name</Text>
      <TextInput
        style={styles.formName}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="..."
      />
    </View>
    <View style={styles.formText} >
      <Text style={styles.inputHeader}>Cocktail recipe</Text>
      <TextInput
        style={styles.textbox}
        value={newRecipe}
        onChangeText={text => setNewRecipe(text)}
        placeholder="Recipe:"
        multiline={true}
      />
    </View>
    <Button style={styles.button} title="Submit" onPress={handleSubmit} />
  </View>
  );
};

export default SubmitDrinkScreen;
