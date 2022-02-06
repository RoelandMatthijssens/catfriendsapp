import React from 'react';
import {View} from 'react-native';
import {Card} from '../components/Card';

export const CardList = ({users}) => {
  return (
    <View>
      <View>
        {users.map((user, i) => (
          <Card key={i} user={user} />
        ))}
      </View>
    </View>
  );
};
