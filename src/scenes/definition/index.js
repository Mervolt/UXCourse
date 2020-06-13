import React from "react";
import { View, Text, StatusBar, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { NavigationActions, StackActions } from "react-navigation";
import { Card } from "native-base";
import FixedHeader from "_components/header";
import { useEffect, useState } from "react";
import CustomCard from "_components/customcard";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getTokenSourceMapRange } from "typescript";

const DefinitionScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    setData(navigation.state.params.data);
    setId(navigation.state.params.id);
    setCorrect(navigation.state.params.correct);
    setIncorrect(navigation.state.params.incorrect);
  });

  const getDefinition = () => {
    if (data.length > 0) return data[id].answer;
    else return "";
  };

  const getLikes = () => {
    if (data.length > 0) return data[id].thumbs;
    else return 0;
  };

  const getAvatarTitle = () => {
    if (data.length > 0 && data[id].author != undefined) return data[id].author[0];
    else return "";
  };

  const getAuthor = () => {
    if (data.length > 0 && data[id].author != undefined) return data[id].author;
    else return "";
  };

  const getIsVisible = () => {
    if (data.length > 0) return data[id].isVisible;
    else return 0;
  };

  const getTerm = () => {
    if (data.length > 0) return data[id].description.toUpperCase();
    else return "";
  };

  const getIsStar = () => {
    if (data.length > 0) return data[id].isStar;
    else return false;
  }

  const clearStack = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: "Cards" })]
      })
    );
  };

  const handleCorrectAnswer = () => {
    clearStack();
    const tmp = correct + 1;
    if (id + 1 < data.length)
      navigation.navigate("Term", {
        data: data,
        id: id + 1,
        correct: tmp,
        incorrect: incorrect
      });
    else navigation.navigate("Summary", { correct: tmp, incorrect: incorrect });
  };

  const handleIncorrectAnswer = () => {
    clearStack();
    const tmp = incorrect + 1;
    if (id + 1 < data.length)
      navigation.navigate("Term", {
        data: data,
        id: id + 1,
        correct: correct,
        incorrect: tmp
      });
    else navigation.navigate("Summary", { correct: correct, incorrect: tmp });
  };

  const handleOnPressEnd = () => {
    clearStack();
    navigation.navigate("Summary", { correct: correct, incorrect: incorrect });
  };

  const handleOnPressConsult = () => {
    clearStack();
    navigation.navigate("Consultation", {title: getTerm()})
  };

  return (
    <View style={styles.cardView}>
      <StatusBar barStyle="light-content" />
      <View style={styles.cardView}>
        <CustomCard
          author={getAuthor()}
          thumbs={getLikes()}
          isVisible={getIsVisible()}
          isStar={getIsStar()}
          avatarTitle={getAvatarTitle()}
        />
        <Card style={styles.card}>
          <Text style={styles.text}>{getDefinition()}</Text>
        </Card>
        <View style={styles.upperCard}>
          <TouchableOpacity onPress={handleCorrectAnswer}>
            <Card style={styles.smallCard}>
              <Icon name="emoji-happy" size={30} color="#219653" />

              <Text style={{ textAlign: "center" }}>
                Odpowiedziałem poprawnie
              </Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleIncorrectAnswer}>
            <Card style={styles.smallCard}>
              <Icon name="emoji-sad" size={30} color="#EB5757" />
              <Text style={{ textAlign: "center" }}>
                Oznacz jako do powtórzenia
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "flex-start",
          alignContent: "stretch"
        }}
      >
        <Button
          containerStyle={{ marginRight: 48, width: 120 }}
          title="SKONSULTUJ"
          type="outline"
          onPress={handleOnPressConsult}
        />
        <Button
          containerStyle={{ marginLeft: 48, width: 120 }}
          title="ZAKOŃCZ"
          type="solid"
          onPress={handleOnPressEnd}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
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
    backgroundColor: "#BBBABA"
    // backgroundColor: "#FF9B7B"
  },
  button: {
    color: "#2C98F0",
    borderColor: "#fff",
    justifyContent: "flex-end",
    width: "100%"
  },
  text: {
    textAlign: "center",
    color: "black"
  },
  upperCard: {
    flexDirection: "row"
  }
});

export default DefinitionScreen;
