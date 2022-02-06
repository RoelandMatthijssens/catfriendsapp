import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const SearchBox = ({value, onSearch}) => {
  return (
    <TextInput
      style={Styles.input}
      onChangeText={onSearch}
      value={value}
      placeholder="Search your cat friends"
    />
  );
};

const Styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
  },
});
