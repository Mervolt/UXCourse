import React from "react";
import { Header } from "react-native-elements";
import BookIcon from "_components/icons/book";
import MenuIcon from "_components/icons/menu";


const FixedHeader = ({title, navigation}) => {
  const openMenu = () => navigation.openDrawer();

  return (<Header
    leftComponent={<MenuIcon onPress={openMenu}/>}
    centerComponent={{
      text: title.toUpperCase(),
      style: { color: "#fff", fontSize: 16 }
    }}
    rightComponent={<BookIcon />}
  />
)
};
export default FixedHeader;
