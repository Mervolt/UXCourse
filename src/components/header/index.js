import React from "react";
import { Header } from "react-native-elements";
import BookIcon from "_components/book";

const FixedHeader = props => (
  <Header
    leftComponent={{ icon: "menu", color: "#fff" }}
    centerComponent={{
      text: props.title.toUpperCase(),
      style: { color: "#fff", fontSize: 16 }
    }}
    rightComponent={<BookIcon />}
  />
);
export default FixedHeader;
