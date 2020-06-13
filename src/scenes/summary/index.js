import React from "react";
import { View, Text, StatusBar, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Card } from "native-base";
import FixedHeader from "_components/header";
import { useEffect, useState } from "react";
import CustomCard from "_components/customcard";
import Icon from "react-native-vector-icons/Entypo";
import {
  StackActions,
  NavigationActions,
  CommonActions
} from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

const SummaryScreen = ({ navigation }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    setCorrect(navigation.state.params.correct);
    setIncorrect(navigation.state.params.incorrect);
  });

  const clearStack = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: "Cards" })]
      })
    );
  };

  const handleOnPressBack = () => {
      clearStack();
      navigation.navigate('Cards');
  }

  return (
    <View style={styles.cardView}>
      <StatusBar barStyle="light-content" />
      <View style={styles.cardView}>
        <Card style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              margin: 5,
              alignContent: "space-around"
            }}
          >
            <Text
              style={{
                textAlign: "left",
                marginTop: 30,
                marginRight: 20,
                color: "black"
              }}
            >
              Wszystkie przeglądnięte fiszki
            </Text>
            <Text style={styles.textAll}>{correct + incorrect}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 5,
              alignContent: "space-around"
            }}
          >
            <View style={styles.sumView}>
              <Icon name="emoji-happy" size={50} color="#219653" />
              <Text style={styles.text}>{correct}</Text>
            </View>
            <View style={styles.sumView}>
              <Icon name="emoji-sad" size={50} color="#EB5757" />
              <Text style={styles.text}>{incorrect}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}></View>
        </Card>
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
        //   flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          alignContent: "flex-end"
        }}
      >
        <Button
          containerStyle={{ marginLeft: 220, width: 120 }}
          title="POWRÓT"
          type="solid"
          onPress={handleOnPressBack}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  smallCard: {
    width: 167,
    height: 80,
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: 340,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    borderColor: "#2C98F0",
    borderWidth: 10,
    backgroundColor: "#fff"
  },
  button: {
    color: "#2C98F0",
    borderColor: "#fff",
    justifyContent: "flex-end",
    width: "100%"
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "black",
    fontWeight: "bold"
  },
  textAll: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
    color: "black",
    fontWeight: "bold"
  },
  upperCard: {
    flexDirection: "row"
  },
  sumView: {
    margin: 40
  }
});

export default SummaryScreen;
