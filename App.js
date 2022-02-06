/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {ScrollView, View} from 'react-native';
import {CardList} from './src/components/CardList';
import {Header} from './src/components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => Node = () => {
  const [users, setUsers] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(usersResponse => {
        setUsers(usersResponse);
      });
  }, []);

  const onSearch = newSearchString => {
    setSearchString(newSearchString);
  };

  const filteredUsers = users.filter(user => user.name.includes(searchString));

  return (
    <SafeAreaProvider>
      <View>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header onSearch={onSearch} searchString={searchString} />
          <CardList users={filteredUsers} />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
