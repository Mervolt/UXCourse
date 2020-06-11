import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import {Container, styles} from '../Components/Container';
import {Question} from '../Components/Question';
import {Answer} from '../Components/Answer';
import {CorrectTotal} from '../Components/CorrectTotal';
import {setTotalCount} from '../actions/index';
import {Alert} from '../Components/Alert';
import handleCategory from '../util/handleCategory';
import { Header, Avatar } from 'react-native-elements';
import {AlertEnemy} from '../Components/AlertEnemy';

class Home extends Component {
  render() {
    const {
      totalCount,
      correctCount,
      dispatch,
      answerd,
      answerCorrect,
      category,
      navigation,
      activeQuestionIndex,
    } = this.props;
    const {question, answers, length} = handleCategory(this.props);
    dispatch(setTotalCount(length));
    return (
      <Container backgroundColor={category}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Sieci Komputerowe', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />

<           View style={{
                  flexDirection: "row",
                }}> 
              <View style={{
                  flexDirection: "row",
                  borderRadius: 50,
                  width: '45%',
                  marginTop: 20,
                  backgroundColor: '#d4d1d1',
                }}> 
                <Avatar
                  rounded
                  size="medium"
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                />
                <Text style={{marginTop: 15, fontSize: 15}}>Adrian Gonzalez</Text>
              </View>

              <View style={{
                  position: 'absolute', 
                  right: 0,
                  flexDirection: "row-reverse",
                  borderRadius: 50,
                  width: '45%',
                  marginTop: 20,
                  backgroundColor: '#d4d1d1',
                }}> 
                <Avatar
                  rounded 
                  title='J' 
                  size="medium"
                  overlayContainerStyle={{backgroundColor: 'green'}}
                />
                <Text style={{marginTop: 15, fontSize: 15}}>Jan Kowalski</Text>
              </View>
            </View>

            <View style={{
                  flexDirection: "row",
                  marginTop: 7,
            }}> 
              <View style={{
                    flexDirection: "row",
                    left: 15
              }}> 
                {Array.from(Array(correctCount), () => {
                  return <View style={{width: 25, height: 25, borderRadius: 25/2, backgroundColor: 'green'}}/>
                })}
                {Array.from(Array(Math.max(activeQuestionIndex-correctCount, 0)), () => {
                  return <View style={{width: 25, height: 25, borderRadius: 25/2, backgroundColor: 'red'}}/>
                })}
                {Array.from(Array(Math.max(totalCount-activeQuestionIndex, 0)), () => {
                  return <View style={{width: 25, height: 25, borderRadius: 25/2, backgroundColor: 'grey'}}/>
                })}
              </View>


              <View style={{
                    flexDirection: "row",
                    position: 'absolute', 
                    right: 15
              }}> 
                {Array.from(Array(Math.max(activeQuestionIndex-correctCount, 0)), () => {
                  return <View style={{width: 25, height: 25, borderRadius: 25/2, backgroundColor: 'green'}}/>
                })}
                {Array.from(Array(correctCount), () => {
                  return <View style={{width: 25, height: 25, borderRadius: 25/2, backgroundColor: 'red'}}/>
                })}
                {Array.from(Array(Math.max(totalCount-activeQuestionIndex, 0)), () => {
                  return <View style={{width: 25, height: 25, borderRadius: 25/2, backgroundColor: 'grey'}}/>
                })}
              </View>
            </View>

            <Question question={question} />


            <Answer
              answers={answers}
              length={length}
              navigation={navigation}
              activeQuestionIndex={activeQuestionIndex}
            />
          </View>
        </SafeAreaView>
        <Alert answerd={answerd} answerCorrect={answerCorrect} />
        <AlertEnemy answerd={answerd} answerCorrect={!answerCorrect} />
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    totalCount,
    correctCount,
    activeQuestionIndex,
    answerd,
    answerCorrect,
    category,
  } = state;
  return {
    totalCount,
    correctCount,
    activeQuestionIndex,
    answerd,
    answerCorrect,
    category,
  };
};

export default connect(mapStateToProps)(Home);
