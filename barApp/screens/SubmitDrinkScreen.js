import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles';
import { firestore, collection, addDoc, RECIPE } from '../firebase/Config';

const SubmitDrinkScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [newRecipe, setNewRecipe] = useState('');

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(firestore, RECIPE), {
      recipeName: name,
      recipe: newRecipe
    }).catch(error => console.log(error))
    setNewRecipe('')
    setName('')
    console.log('Recipe saved.')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Submit new cocktail</Text>
      <View style={styles.formText}>
        <Text style={styles.inputHeader}>Cocktail name</Text>
        <TextInput
          style={styles.formName}
          value={name}
          onChangeText={text => setName(text)}
          placeholder=" "
        />
      </View>
      <View style={styles.formText} >
        <Text style={styles.inputHeader}>Cocktail recipe</Text>
        <TextInput
          style={styles.textbox}
          value={newRecipe}
          onChangeText={text => setNewRecipe(text)}
          placeholder=" "
          multiline={true}
        />
      </View>
      <Button color="#f542c2" title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default SubmitDrinkScreen;
