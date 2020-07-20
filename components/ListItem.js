import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={style.listItem}>
      <View style={style.listItemView}>
        <View style={{flex: 1}}>
          <Text
            style={[
              style.listItemText,
              item.alignment === 'left'
                ? style.listItemLeft
                : style.listItemRight,
            ]}>
            {item.text}
          </Text>
        </View>
        <Icon
          name="remove"
          size={20}
          style={{paddingLeft: 10}}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const style = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#fefefe',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    flex: 1,
  },
  listItemRight: {
    textAlign: 'right',
  },
  listItemLeft: {
    textAlign: 'left',
  },
});
