import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import CardsStack from "./cardsStack" ;


const RootDrawerNavigator = createDrawerNavigator({
  Cards: {
    screen: CardsStack,
    navigationOptions: {
      drawerLabel: "FISZKI"
    }
  }
});

const AppNavigator = createAppContainer(
  RootDrawerNavigator
);

export default AppNavigator;
