import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Dimensions} from 'react-native';
import {Container} from '../Components/Container';
import {SummeryText} from '../Components/SummeryText';
import {NavButton} from '../Components/NavButton';
const screen = Dimensions.get('window');

class Summery extends Component {
  render() {
    const {category, totalCount, correctCount, navigation} = this.props;
    return (
      <Container Summery backgroundColor={category}>
        <SummeryText
          category={category}
          totalCount={totalCount}
          correctCount={correctCount}
        />
<       View style={{
          flexDirection: "row",
          position: 'absolute', 
          top: screen.height*10/12-15,
        }}> 
          <View style={{
            flexDirection: "row",
            position: 'absolute', 
            left: 15,
          }}> 
            <NavButton navigation={navigation} text="Jeszcze Raz" nav='QuizIndex'/>
          </View>
          <View style={{
            flexDirection: "row",
            position: 'absolute', 
            right: 15,
          }}> 
            <NavButton navigation={navigation} text="Wróć do menu" nav='QuizIndex'/>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {totalCount, correctCount, category} = state;
  return {
    totalCount,
    correctCount,
    category,
  };
};
export default connect(mapStateToProps)(Summery);
