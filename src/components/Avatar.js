import React from 'react';
import {Image, View} from 'react-native';
import {StyleSheet} from 'react-native';

export const Avatar = ({user}) => {
  return (
    <View>
      <Image
        style={Styles.avatar}
        source={{
          uri: `https://robohash.org/${user.name}?set=set4&size=200x200`,
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 200,
  },
});
