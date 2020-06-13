import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "native-base";
import { Icon } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { useState, useEffect } from "react";

const CustomCard = props => {
  const [starColor, setStarColor] = useState("#787878");
  const [isVisible, setIsVisible] = useState(0);

  const handleStarPress = () => {
    if (starColor == "black") setStarColor("#BBBABA");
    else setStarColor("black");
  };

  const handlePressVisible = () => {
    setIsVisible(-1);
  };

  const handlePressVisibleOff = () => {
    setIsVisible(1);
  };

  useEffect(() => {
    if (props.isVisible != undefined) {
      setIsVisible(props.isVisible);
      if (props.isStar)
        setStarColor("black");
      else
        setStarColor("#BBBABA");
    }   
  }, [props]);

  return (
    <Card style={styles.smallCard}>
      <View style={styles.upperCard}>
        <View style={{ flexDirection: "row", width: 150, margin: 5 }}>
          {props.avatarTitle != "" && (
            <Avatar
              size="small"
              rounded
              containerStyle={{
                backgroundColor: "#BBBABA",
                alignSelf: "center"
              }}
              title={props.avatarTitle}
            />
          )}
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              margin: 5
            }}
          >
            {props.author != undefined && (
              <Text style={{ textAlign: "center", color: "black" }}>
                {props.author}
              </Text>
            )}
          </View>
        </View>
        <View style={{ flexDirection: "row", width: 80}}>
        <View style={{width: 100, flexDirection: 'row'}}>
          <Icon
            name="thumb-down"
            size={30}
            style={{ transform: [{ rotateX: "180deg" }] }}
            color="black"
          />
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              margin: 5
              // backgroundColor: "#BBBABA"
            }}
          >
            <View style={{ width: 24 , marginBottom: 5}}>
              <Text
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  color: "black"
                }}
              >
                {props.thumbs}
              </Text>
            </View>
          </View>
            <Icon
              name="thumb-up"
              style={{ transform: [{ rotateX: "180deg" }], marginTop: 7 }}
              size={30}
              color="black"
            />
          </View>
          <View style={{width: 40}}>
            {(isVisible === 1 && (
              <Icon
                name="visibility"
                color="black"
                onPress={handlePressVisible}
                size={30}
              />
            )) ||
              (isVisible === -1 && (
                <Icon
                  name="visibility-off"
                  size={30}
                  color="black"
                  onPress={handlePressVisibleOff}
                />
              ) || (
                <Icon
                  name="visibility"
                  size={30}
                  color="#BBBABA"
                />
              ))}
          </View>
          <View>
            <Icon
              onPress={handleStarPress}
              name="star"
              size={30}
              style={{ marginLeft: 40 }}
              color={starColor}
            />
          </View>
        </View>
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
    margin: 5
  }
});

export default CustomCard;
