import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBox} from './SearchBox';

export const Header = ({onSearch, searchString}) => {
  return (
    <View style={Styles.container}>
      <SearchBox value={searchString} onSearch={onSearch} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 32,
    height: 100,
  },
});
