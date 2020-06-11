import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import handleAnswer from '../../util/handleAnswer';
import styles from './styles';
import { Avatar } from 'react-native-elements';

class Answer extends Component {
  render() {
    const {answers} = this.props;
    return (
      <View>
        {answers.map((answer) => (
          <TouchableOpacity
            style={styles.button}
            key={answer.id}
            onPress={() => handleAnswer(answer.correct, this.props)}>

            <View style={{flexDirection: "row"}}> 
            <Avatar 
              rounded 
              title={answer.id} 
              size="medium"
              overlayContainerStyle={{backgroundColor: '#4693e9'}}

            />
            <Text style={{marginTop: 10, fontSize: 20, textAlign: 'center'}}>   {answer.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default connect()(Answer);
