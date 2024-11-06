import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [ListOfItems, setListOfItems] = useState([
    { text: 'Buy a milk', key: '1' },
    { text: 'Buy a potatoes', key: '2' },
    { text: 'Wash a plates', key: '3' },
    { text: 'Go to university', key: '4' },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => [
      { text: text, key: Math.random().toString(36).substring(7) },
      ...list
    ]);
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList 
          data={ListOfItems}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
