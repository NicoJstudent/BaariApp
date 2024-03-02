import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { firestore, collection, addDoc, RECIPE } from '../firebase/Config';
import { onSnapshot, query } from 'firebase/firestore';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const q = query(collection(firestore, RECIPE))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempRecipes = []

      querySnapshot.forEach((doc) => {
        const recipeObject = {
          id: doc.id,
          recipename: doc.data().recipeName,
          recipe: doc.data().recipe
        }
        tempRecipes.push(recipeObject)
      })
      setRecipes(tempRecipes)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
             
        <View>
          <ScrollView>
            {
              recipes.map((recipe) => (
                <View style={styles.recipeBox} key={recipe.id}>
                  <Text style={styles.recipeNameInfo}>{recipe.recipename}:</Text>
                  <Text>{recipe.recipe}</Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
