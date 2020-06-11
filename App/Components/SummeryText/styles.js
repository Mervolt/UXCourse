import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$opacity',
    width: '100%',
    borderRadius: 25,
  },
  title: {
    fontSize: 40,
    color: '$black',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    color: '$black',
    fontWeight: '500',
  },
  other: {
    textAlign: 'center',
    fontSize: 25,
    color: '$black',
    fontWeight: '600',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
