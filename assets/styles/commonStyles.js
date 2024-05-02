import {StyleSheet} from 'react-native';

const CommonStyles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLabel: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    opacity: 1,
    shadowOpacity: 1,
  },
});

module.exports = CommonStyles;
