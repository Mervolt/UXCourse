import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');

export default EStyleSheet.create({
  container: {
    borderRadius: 3,
    width: screen.width  * 3 / 8,
    height: screen.height / 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  computer: {
    backgroundColor: '#4693e9',
  },
});
