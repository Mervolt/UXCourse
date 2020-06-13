import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FixedHeader from "_components/header";
import CardsHomeScreen from "_scenes/cards";
import React from "react";
import DefinitionScreen from "_scenes/definition";
import TermScreen from "_scenes/term";
import SummaryScreen from "_scenes/summary";
import FiszkiListView from "_fiszka/FiszkiListView";
import { Root } from "native-base";

const CardsStackOpts = {
    initialRouteName: "Cards",
    // headerMode: "none"
  };
  
  const CardsRouteConfigs = {
    Cards: {
      screen: CardsHomeScreen,
      navigationOptions: ({navigation}) => {
      return {header: () => <FixedHeader title="Sieci komputerowe" navigation={navigation}/>}
      },
    },
    Term: {
      screen: TermScreen,
      navigationOptions: ({navigation}) => {
        return {header: () => <FixedHeader title="Sieci komputerowe" navigation={navigation}/>}
        }
    },
    Definition: {
      screen: DefinitionScreen,
      navigationOptions: ({navigation}) => {
        return {header: () => <FixedHeader title="Sieci komputerowe" navigation={navigation}/>}
        }
    },
    Summary: {
      screen: SummaryScreen,
      navigationOptions: ({navigation}) => {
        return {header: () => <FixedHeader title="Sieci komputerowe" navigation={navigation}/>}
        }
    },
    CardsList: {
      screen: FiszkiListView,
      navigationOptions: ({navigation}) => {
        return {header: () => <FixedHeader title="Sieci komputerowe" navigation={navigation}/>}
        }
    }
  };

  const CardsStack = createStackNavigator(
      CardsRouteConfigs, CardsStackOpts
  );

  export default CardsStack;