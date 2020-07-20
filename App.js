import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk', alignment: 'left'},
    {id: uuidv4(), text: 'Eggs', alignment: 'left'},
    {id: uuidv4(), text: 'Bread', alignment: 'left'},
    {id: uuidv4(), text: 'Potatoes', alignment: 'left'},
    {id: uuidv4(), text: 'Tomatoes', alignment: 'left'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text, alignment) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        return [{id: uuidv4(), text, alignment}, ...prevItems];
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <AddItem style={style.addItem} addItem={addItem} />
    </KeyboardAvoidingView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  addItem: {
    paddingBottom: 20,
  },
});
