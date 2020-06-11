import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Quiz from '../Screens/Quiz';
import QuizIndex from '../Screens/QuizIndex';
import Summery from '../Screens/Summery';

const MainStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="QuizIndex">
      <MainStack.Screen
        name="Quiz"
        component={Quiz}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Summery"
        component={Summery}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
