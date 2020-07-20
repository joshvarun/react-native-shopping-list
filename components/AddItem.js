import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.btn} onPress={() => addItem(text, 'left')}>
        <Text style={style.btnText}>
          <Icon name="chevron-left" size={20} />
          Add
        </Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Add Item..."
        style={style.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={style.btn}
        onPress={() => addItem(text, 'right')}>
        <Text style={style.btnText}>
          Add
          <Icon name="chevron-right" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    borderRadius: 4,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
