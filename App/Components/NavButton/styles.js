import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');

export default EStyleSheet.create({
  container: {
    marginTop: 30,
  },
  button: {
    borderRadius: 3,
    width: screen.width  * 3 / 8,
    height: screen.height / 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4693e9',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
