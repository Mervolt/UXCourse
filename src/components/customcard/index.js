import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import { useState } from "react";

const CustomCard = props => {
  const [starColor, setStarColor] = useState("#787878");

  const handleStarPress = () => {
    if (starColor == "#787878") setStarColor("#BBBABA");
    else setStarColor("#787878");
  };

  return (
    <Card style={styles.smallCard}>
      <View style={styles.upperCard}>
        <Avatar
          size="small"
          rounded
          containerStyle={{ backgroundColor: "#BBBABA", alignSelf: "center" }}
          title={props.avatarTitle}
        />
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: 5
          }}
        >
          <Text style={{ textAlign: "center", color: "black" }}>
            {props.author}
          </Text>
        </View>
        <Icon
          name="thumbs-down"
          size={30}
          style={{ transform: [{ rotate: "180deg" }], marginLeft: 25 }}
          color="#787878"
        />
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            backgroundColor: "#BBBABA"
          }}
        >
          <Text
            style={{ textAlign: "center", alignSelf: "center", color: "black" }}
          >
            {props.likes}
          </Text>
        </View>
        <Icon
          name="thumbs-up"
          style={{ transform: [{ rotateX: "180deg" }] }}
          size={30}
          color="#787878"
        />
        {/* <Icon
             name="eye-slash"
             size={30}
             style={{marginLeft: 15}}
             color="#787878"
            /> */}
        <Icon
          onPress={handleStarPress}
          name="star"
          size={30}
          style={{ marginLeft: 40 }}
          color={starColor}
        />
      </View>
    </Card>
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
    fontSize: 40,
    color: "#fff"
  },
  upperCard: {
    flexDirection: "row",
    margin: 10
  }
});

export default CustomCard;
