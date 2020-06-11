import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 50,
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#d4d1d1',
    paddingVertical: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '$black',
  },
});
