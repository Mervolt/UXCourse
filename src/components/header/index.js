import React from "react";
import { Header } from "react-native-elements";
import BookIcon from "_components/icons/book";
import MenuIcon from "_components/icons/menu";
import QuestionIcon from "_components/icons/question";

const FixedHeader = ({ title, navigation, consult }) => {
  const openMenu = () => navigation.openDrawer();

  return (
    <Header
      leftComponent={<MenuIcon onPress={openMenu} />}
      centerComponent={{
        text: title.toUpperCase(),
        style: { color: "#fff", fontSize: 16 }
      }}
      rightComponent={
        (!consult && <BookIcon />) || (consult && <QuestionIcon />)
      }
    />
  );
};
export default FixedHeader;
