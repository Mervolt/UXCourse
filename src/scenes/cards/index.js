import React from "react";
import { View, Text, StatusBar, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FixedHeader from "_components/header";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardsHomeScreen = ({ navigation, route }) => {
  const dataList = [
    { key: "PRZĘGLĄDAJ WSZYSTKIE", icon: "book" },
    { key: "PRZEGLĄDAJ LOSOWE", icon: "random" },
    { key: "PRZEGLĄDAJ ULUBIONE", icon: "star" },
    { key: "PRZEGLĄDAJ DO POWTÓRZENIA", icon: "repeat" },
    { key: "PRZEGLĄDAJ PRYWATNE", icon: "eye-slash" },
    { key: "LISTA WSZYSTKICH FISZEK", icon: "list" }
  ];

  const numColumns = 2;

  const renderItem = ({ item, index }) => {
    const data = require("_data/cards.json");
    const handleOnPress = () => {
      if (item.key == "LISTA WSZYSTKICH FISZEK") {
        navigation.navigate("CardsList", {
          fiszki: data
        });
      } else if (item.key == "PRZEGLĄDAJ ULUBIONE") {
        navigation.navigate("Term", {
          data: data.filter(card => card.isStar == true),
          id: 0,
          correct: 0,
          incorrect: 0
        });
      } else if (item.key == "PRZEGLĄDAJ PRYWATNE") {
        navigation.navigate("Term", {
          data: data.filter(card => card.isVisible == -1),
          id: 0,
          correct: 0,
          incorrect: 0
        });
      } else {
        navigation.navigate("Term", {
          data: data,
          id: 0,
          correct: 0,
          incorrect: 0
        });
      }
    };

    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={handleOnPress}>
          <Icon
            name={item.icon}
            iconStyle={{ float: "left" }}
            size={40}
            color="#2C98F0"
          />
          <Text style={styles.text}>{item.key}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={{ margin: 20 }}
        data={dataList}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={(item, index) => item.key}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    height: 130,
    flex: 1,
    margin: 10,
    padding: 10,
    borderColor: "#2C98F0",
    borderWidth: 1,
    borderRadius: 10,
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 8
  },
  text: {
    color: "#2C98F0",
    textAlign: "right",
    justifyContent: "flex-end",
    fontSize: 13,
    margin: 8
  }
});

export default CardsHomeScreen;
