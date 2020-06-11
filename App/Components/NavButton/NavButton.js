import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

class NavButton extends Component {
  render() {
    const {navigation, text, nav} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(nav)}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NavButton;
