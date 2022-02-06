import React, {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import {Icon} from 'react-native-elements';

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const like = () => {
    Vibration.vibrate(20);
    setLikes(likes + 1);
  };
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
