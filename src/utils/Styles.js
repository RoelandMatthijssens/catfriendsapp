import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 32,
    marginVertical: 10,
    padding: 10,
  },
  cardName: {
    fontSize: 24,
    fontWeight: '600',
  },
  cardEmail: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  avatar: {
    width: 200,
    height: 200,
  },
});

export default Styles;
