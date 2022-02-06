import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from './Avatar';
import {LikeButton} from './LikeButton';

export const Card = ({user}) => {
  return (
    <View style={Styles.mainContainer}>
      <Avatar user={user} />
      <View style={Styles.contentContainer}>
        <View>
          <Text style={Styles.name}> {user.name} </Text>
          <Text style={Styles.email}> {user.email} </Text>
        </View>
        <LikeButton />
      </View>
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
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 32,
    marginVertical: 10,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
