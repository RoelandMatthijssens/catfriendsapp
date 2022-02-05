import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Styles from '../utils/Styles';
import Card from '../components/Card';

const CardList = ({users}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(users);
  return (
    <View style={Styles.sectionContainer}>
      <View
        style={[
          Styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {users.map((user, i) => (
          <Card key={i} user={user} />
        ))}
      </View>
    </View>
  );
};

export default CardList;
