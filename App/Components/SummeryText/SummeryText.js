import React from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const SummeryText = ({category, totalCount, correctCount}) => {
  if (correctCount>2) {
    return (
      <View style={styles.container}>
        <Animatable.View animation="zoomIn">
          <Text style={styles.title}>Gratulacje</Text>
          <Text style={styles.other}>
            Kategoria:
            <Text style={styles.result}> Sieci komputerowe</Text>
            </Text>
            <Text style={styles.other}>
            Pokonałeś/aś:
            <Text style={styles.result}> Jan Kowalski</Text>
            </Text>
            <View style={{
                    flexDirection: "row",
                    left: 15
              }}> 
              <Text style={styles.other}>Twój wynik to:</Text>
                {Array.from(Array(correctCount), () => {
                  return <View style={{width: 30, height: 30, borderRadius: 30/2, marginTop: 20, backgroundColor: 'green'}}/>
                })}
                {Array.from(Array(Math.max(totalCount-correctCount, 0)), () => {
                  return <View style={{width: 30, height: 30, borderRadius: 30/2, marginTop: 20, backgroundColor: 'red'}}/>
                })}
              </View>
            <Text style={styles.other}>
            <Text style={styles.result}>Tak trzymaj!</Text>
          </Text>
        </Animatable.View>
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <Animatable.View animation="zoomIn">
          <Text style={styles.title}>OUUUUU</Text>
          <Text style={styles.other}>
            Kategoria:
            <Text style={styles.result}> Sieci komputerowe</Text>
            </Text>
            <Text style={styles.other}>
            Przegrałeś/aś z:
            <Text style={styles.result}>Jan Kowalski</Text>
            </Text>
            <View style={{
                    flexDirection: "row",
                    left: 15
              }}> 
              <Text style={styles.other}>Twój wynik to:</Text>
                {Array.from(Array(correctCount), () => {
                  return <View style={{width: 30, height: 30, borderRadius: 30/2, marginTop: 20, backgroundColor: 'green'}}/>
                })}
                {Array.from(Array(Math.max(totalCount-correctCount, 0)), () => {
                  return <View style={{width: 30, height: 30, borderRadius: 30/2, marginTop: 20, backgroundColor: 'red'}}/>
                })}
              </View>
            <Text style={styles.other}>
            <Text style={styles.result}>Następnym razem będzie lepiej</Text>
          </Text>
        </Animatable.View>
      </View>
    );
  }
};
export default SummeryText;
