import React from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { Header, Card, Button, Icon } from "react-native-elements";

export default class Consultation extends React.Component {
  constructor(props) {
    super(props);
    let firstUser = {
      key: 0,
      counter: 21,
      counterVote: 0,
      name: "lukowalski",
      comment: "Hej, chciałem zapytać się jak inni rozumieją prawo Brzytwy?"
    };
    let secondUser = {
      key: 1,
      counter: 37,
      counterVote: 0,
      name: "RafauFromOblegorek",
      comment: "Cześć, prawo brzytwy odnosi się do dążenia do prostoty"
    };
    this.state = {
      votingPanels: [],
      commentContent: "",
      commentCounter: 2,
      title: this.props.navigation.state.params.title
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    let user = {
      key: this.state.commentCounter,
      counter: 0,
      counterVote: 0,
      name: "Me",
      comment: this.state.commentContent
    };
    this.state.votingPanels.push(user);
    console.log(user);
    this.setState(() => {
      return {
        user: user
      };
    });
  }

  incrementCounter(panel) {
    if (panel.counterVote === 0) {
      panel.counter++;
      panel.counterVote = 1;
    } else if (panel.counterVote === -1) {
      panel.counter += 2;
      panel.counterVote = 1;
    } else {
      panel.counter--;
      panel.counterVote = 0;
    }

    this.setState(() => {
      return {
        firstUser: {
          counter: panel.counter,
          counterVote: panel.counterVote
        }
      };
    });
  }

  decrementCounter(panel) {
    if (panel.counterVote === 0) {
      panel.counter--;
      panel.counterVote = -1;
    } else if (panel.counterVote === 1) {
      panel.counter -= 2;
      panel.counterVote = -1;
    } else {
      panel.counter++;
      panel.counterVote = 0;
    }

    this.setState(() => {
      return {
        firstUser: {
          counter: panel.counter,
          counterVote: panel.counterVote
        }
      };
    });
  }

  render() {
    let { votingPanels: users } = this.state;
    return (
      <ScrollView>
        <View>
          <Header
            centerComponent={{
              text: this.state.title,
              style: { color: "#000000", fontSize: 24, fontWeight: "bold" }
            }}
            containerStyle={{
              backgroundColor: "lightgray",
              marginTop: 20
            }}
          />
        </View>
        <View>
          {users.map(comment => (
            <View style={styles.row}>
              <View>
                <Card containerStyle={styles.cardContainer}>
                  <View style={styles.userAnswer}>
                    <View style={styles.userDataField}>
                      <View>
                        <Text style={styles.textUserData}>{comment.name}</Text>
                        <Icon style={styles.iconStyle} name="person" />
                      </View>
                    </View>
                    <View style={styles.userTextField}>
                      <Text style={styles.textUserData}>{comment.comment}</Text>
                    </View>
                  </View>
                </Card>
              </View>
              <View style={styles.iconField}>
                <Icon
                  style={styles.iconStyle}
                  name="thumb-up"
                  color={comment.counterVote === 1 ? "#00FF00" : "#000000"}
                  onPress={() => this.incrementCounter(comment)}
                />
                <Text style={styles.textData}>{comment.counter}</Text>
                <Icon
                  style={styles.iconStyle}
                  name="thumb-down"
                  color={comment.counterVote === -1 ? "#FF0000" : "#000000"}
                  onPress={() => this.decrementCounter(comment)}
                />
              </View>
            </View>
          ))}
        </View>
        <View>
          <Card containerStyle={styles.addAnswerContainer}>
            <View>
              <TextInput
                placeholder="Dodaj komentarz"
                ref={input => {
                  this.textInput = input;
                }}
                onChangeText={value => this.setState({ commentContent: value })}
              />
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
                title="ANULUJ"
                type="outline"
                onPress={() => this.textInput.clear()}
              />
              <Button
                containerStyle={{ marginLeft: 48, width: 120 }}
                title="DODAJ"
                type="solid"
                onPress={this.addComment}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userAnswer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 0,
    marginRight: 0
  },
  buttonRight: {
    backgroundColor: "blue",
    width: "70%"
  },
  buttonLeft: {
    backgroundColor: "blue",
    width: "70%"
  },
  buttonViewLeft: {
    alignItems: "flex-start",
    alignContent: "center"
  },
  buttonViewRight: {
    alignItems: "flex-end"
  },
  iconField: {
    marginTop: 30,
    width: 20,
    maxWidth: 30,
    marginRight: 20,
    alignItems: "center",
    marginLeft: 0
  },
  userTextField: {
    flex: 1,
    minHeight: 100,
    minWidth: 280,
    padding: 3
  },
  userDataField: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "black",
    minWidth: 80
  },

  textUserData: {
    marginTop: 5,
    padding: 3,
    textAlign: "center",
    textAlignVertical: "center",
    color: "black"
  },
  cardContainer: {
    elevation: 2,
    padding: 0,
    margin: 0,
    marginRight: 10,
    marginTop: 30,
    minWidth: 360
  },
  addAnswerContainer: {
    elevation: 2,
    padding: 0,
    margin: 0,
    marginTop: 30,
    marginBottom: 0,
    minHeight: 185
  },
  iconStyle: {
    marginTop: 10,
    marginBottom: 5
  },
  textData: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  }
});
