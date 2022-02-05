import React from 'react';
import {Image, View} from 'react-native';
import Styles from '../utils/Styles';

const Avatar = ({user}): Node => {
  return (
    <View style={Styles.sectionContainer}>
      <Image
        style={Styles.avatar}
        source={{
          uri: `https://robohash.org/${user.name}?set=set4&size=200x200`,
        }}
      />
    </View>
  );
};

export default Avatar;
