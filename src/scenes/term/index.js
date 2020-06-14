import React from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  VirtualizedList
} from "react-native";
import { Card, CardItem } from "native-base";
import Icon from "react-native-vector-icons/Entypo";
import FixedHeader from "_components/header";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button } from "react-native-elements";
import {
  StackActions,
  NavigationActions,
  CommonActions
} from "react-navigation";
import CustomCard from "_components/customcard";

const TermScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    setData(navigation.state.params.data);
    setId(navigation.state.params.id);
    setCorrect(navigation.state.params.correct);
    setIncorrect(navigation.state.params.incorrect);
    console.log(incorrect);
    console.log(correct);
    console.log(id);
  });

  const getTerm = () => {
    if (data.length > 0) return data[id].description.toUpperCase();
    else return "";
  };

  const getLikes = () => {
    if (data.length > 0) return data[id].thumbs;
    else return 0;
  };

  const getAvatarTitle = () => {
    if (data.length > 0 && data[id].author != undefined)
      return data[id].author[0];
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

  const getIsStar = () => {
    if (data.length > 0) return data[id].isStar;
    else return false;
  };

  const clearStack = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: "Cards" })]
      })
    );
  };

  const handleOnPress = () => {
    clearStack();
    navigation.navigate("Definition", {
      data: data,
      id: id,
      correct: correct,
      incorrect: incorrect
    });
  };

  const handleOnPressEnd = () => {
    clearStack();
    navigation.navigate("Summary", { correct: correct, incorrect: incorrect });
  };

  const handleOnPressConsult = () => {
    clearStack();
    navigation.navigate("Consultation", { title: getTerm() });
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
        <TouchableOpacity onPress={handleOnPress}>
          <Card style={styles.card}>
            <Text style={styles.text}>{getTerm()}</Text>
          </Card>
        </TouchableOpacity>
        <Card style={styles.smallCard}>
          <View style={styles.upperCard}>
            <Icon name="emoji-happy" size={30} color="#219653" />
            <Text
              style={{
                marginLeft: 10,
                textAlign: "center",
                alignSelf: "center",
                color: "#787878"
              }}
            >
              {correct}
            </Text>
            <Icon
              name="emoji-sad"
              size={30}
              style={{ marginLeft: 15 }}
              color="#EB5757"
            />
            <Text
              style={{
                marginLeft: 10,
                textAlign: "center",
                alignSelf: "center",
                color: "#787878"
              }}
            >
              {incorrect}
            </Text>
            <Text
              style={{
                marginLeft: 185,
                textAlign: "center",
                alignSelf: "center",
                color: "#787878"
              }}
            >
              {incorrect + correct}/{data.length}
            </Text>
          </View>
        </Card>
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
    width: 340,
    height: 50,
    margin: 0,
    padding: 0
  },
  card: {
    width: 340,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    backgroundColor: "#79B9ED"
  },
  button: {
    color: "#2C98F0",
    borderColor: "#fff",
    justifyContent: "flex-end",
    width: "100%"
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff"
  },
  upperCard: {
    flexDirection: "row",
    margin: 10
  }
});

export default TermScreen;
