import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FixedHeader from "_components/header";
import CardsHomeScreen from "_scenes/cards";
import React from "react";
import DefinitionScreen from "_scenes/definition";
import TermScreen from "_scenes/term";
import SummaryScreen from "_scenes/summary";

const RootStack = {
  initialRouteName: "Cards",
  header: <FixedHeader title="Sieci komputerowe" />,
  headerMode: "none"
};

const RouteConfigs = {
  Cards: {
    screen: CardsHomeScreen
  },
  Term: {
    screen: TermScreen
  },
  Definition: {
    screen: DefinitionScreen
  },
  Summary: {
    screen: SummaryScreen
  }
};

const AppNavigator = createAppContainer(
  createStackNavigator(RouteConfigs, RootStack)
);

export default AppNavigator;
