import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from './Avatar';

export const Card = ({user}) => {
  return (
    <View style={Styles.container}>
      <Avatar user={user} />
      <Text style={Styles.name}> {user.name} </Text>
      <Text style={Styles.email}> {user.email} </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  email: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'darkgray',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 32,
    marginVertical: 10,
    padding: 10,
  },
});
