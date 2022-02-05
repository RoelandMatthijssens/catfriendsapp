import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Styles from '../utils/Styles';
import Avatar from './Avatar';

const Card = ({user}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={Styles.cardContainer}>
      <Avatar user={user} />
      <Text
        style={[
          Styles.cardName,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {user.name}
      </Text>
      <Text
        style={[
          Styles.cardEmail,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {user.email}
      </Text>
    </View>
  );
};

export default Card;
