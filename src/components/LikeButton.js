import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from 'react-native-elements';

export const LikeButton = ({id}) => {
  const [likes, setLikes] = useState(0);
  const like = () => {
    Vibration.vibrate(20);
    setLikes(likes + 1);
  };
  const store_likes = async () => {
    try {
      await AsyncStorage.setItem(id, JSON.stringify(likes));
    } catch (e) {
      console.log(e);
    }
  };
  const retrieve_likes = async () => {
    try {
      const stored_likes = await AsyncStorage.getItem(id);
      if (stored_likes !== null) {
        setLikes(JSON.parse(stored_likes));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    retrieve_likes();
  }, []);
  useEffect(() => {
    store_likes(likes);
  }, [likes]);

  return (
    <View style={Styles.likeContainer}>
      <Icon
        raised
        name="heart"
        type="font-awesome"
        color="red"
        onPress={like}
      />
      <Text style={Styles.likeCounter}>{likes}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  likeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  likeCounter: {
    marginLeft: -37,
    marginRight: 37,
    marginTop: 22,
    color: 'white',
    fontSize: 15,
  },
});
