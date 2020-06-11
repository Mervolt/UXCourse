import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Container} from '../Components/Container';
import {RowItem} from '../Components/RowItem';
import { Header } from 'react-native-elements';
const screen = Dimensions.get('window');

const QuizIndex = ({navigation}) => (
    <Container QuizIndex>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Sieci Komputerowe', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
<     View style={{
        flexDirection: "row",
        position: 'absolute',
        left: 25,
        top: screen.height * 10 / 12,
      }}> 
        <RowItem
          categoryName="Computer"
          navigation={navigation}
          categoryColor="#778899"
        />
      </View>
    </Container>

);

export default QuizIndex;
