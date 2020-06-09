import React from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { Input, Header, Card, Button, Icon } from 'react-native-elements';


function getColorForUpvote(voteState) {
    if(voteState === 1)
        return "#00FF00";
    else
        return "#FFFFFF";
}

let firstVotingPanel: {
    counter: 21,
    counterVote: 0
}

let secondVotingPanel: {
    counter: 37,
    counterVote: 0
}


export default class Consultation extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                    firstVotingPanel: {
                            counter: 21,
                            counterVote: 0
                        },
                        secondVotingPanel: {
                            counter: 37,
                            counterVote: 0
                        },
            votingPanels: [firstVotingPanel, secondVotingPanel]
                       };
        this.incrementCounterForFirstComment = this.incrementCounterForFirstComment.bind(this);
        this.decrementCounterForFirstComment = this.decrementCounterForFirstComment.bind(this);
        this.incrementCounterForSecondComment = this.incrementCounterForSecondComment.bind(this);
        this.decrementCounterForSecondComment = this.decrementCounterForSecondComment.bind(this);
    }

    incrementCounterForFirstComment() {
        if(this.state.firstVotingPanel.counterVote === 0){
            this.setState(() => {
                return {firstVotingPanel: {
                        counter : this.state.firstVotingPanel.counter + 1,
                        counterVote: 1}};
            });
        }
        else if(this.state.firstVotingPanel.counterVote === -1){
            this.setState(() => {
                return {firstVotingPanel: {
                        counter : this.state.firstVotingPanel.counter + 2,
                        counterVote: 1}};
            });
        }
        else
            this.setState(() => {
                return {firstVotingPanel: {
                        counter : this.state.firstVotingPanel.counter - 1,
                        counterVote: 0}};
            });
    }

    incrementCounterForSecondComment() {
        if(this.state.secondVotingPanel.counterVote === 0){
            this.setState(() => {
                return {secondVotingPanel: {
                        counter : this.state.secondVotingPanel.counter + 1,
                        counterVote: 1}};
            });
        }
        else if(this.state.secondVotingPanel.counterVote === -1){
            this.setState(() => {
                return {secondVotingPanel: {
                        counter : this.state.secondVotingPanel.counter + 2,
                        counterVote: 1}};
            });
        }
        else
            this.setState(() => {
                return {secondVotingPanel: {
                        counter : this.state.secondVotingPanel.counter - 1,
                        counterVote: 0}};
            });
    }

    decrementCounterForFirstComment() {
        if(this.state.firstVotingPanel.counterVote === 0) {
            this.setState(() => {
                return {firstVotingPanel: {
                        counter: this.state.firstVotingPanel.counter - 1,
                        counterVote: -1}};
            });
        }
        else if(this.state.firstVotingPanel.counterVote === 1){
            this.setState(() => {
                return {firstVotingPanel: {
                        counter: this.state.firstVotingPanel.counter - 2,
                        counterVote: -1}};
            });
        }
        else
            this.setState(() => {
                return {firstVotingPanel: {
                        counter: this.state.firstVotingPanel.counter + 1,
                        counterVote: 0}};
            });
    }

    decrementCounterForSecondComment() {
        if(this.state.secondVotingPanel.counterVote === 0) {
            this.setState(() => {
                return {secondVotingPanel: {
                        counter: this.state.secondVotingPanel.counter - 1,
                        counterVote: -1}};
            });
        }
        else if(this.state.secondVotingPanel.counterVote === 1){
            this.setState(() => {
                return {secondVotingPanel: {
                        counter: this.state.secondVotingPanel.counter - 2,
                        counterVote: -1}};
            });
        }
        else
            this.setState(() => {
                return {secondVotingPanel: {
                        counter: this.state.secondVotingPanel.counter + 1,
                        counterVote: 0}};
            });
    }

    render(){

        let { firstVotingPanel } = this.state;
        let { secondVotingPanel } = this.state;

        return (
            <View>
                <View>
                    <Header  containerStyle={{elevation:0}}
                             leftComponent={{
                                 icon: 'menu',
                                 color: '#FFFFFF',
                                 style: {
                                     marginLeft:  10,
                                     marginRight: 10
                                 }
                             }}
                        centerComponent={{
                            text:'UX Aplikacji Intern.',
                            style: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' }
                        }}
                             rightComponent={{
                                 icon: 'help',
                                 color: '#FFFFFF',
                                 style: {
                                     marginLeft:  10,
                                     marginRight: 10
                                 }
                             }}
                    />
                </View>
                <View>
                    <Header
                        centerComponent={{
                            text:'Brzytwa Okhama - mnożenie bytów nad potrzeby',
                            style: { color: '#000000', fontSize: 24, fontWeight: 'bold'}
                        }}
                        containerStyle={{
                           backgroundColor: 'lightgray',
                           marginTop: 20
                        }}
                    />
                </View>
                <View>
                    <View style = {styles.row}>
                        <View>
                            <Card containerStyle={styles.cardContainer}>
                                <View style = {styles.userAnswer}>
                                    <View style = {styles.userDataField}>
                                        <Text  style = {styles.textUserData}>
                                            User1
                                        </Text>
                                    </View>
                                    <View style = {styles.userTextField}>
                                        <Text  style = {styles.textUserData}>
                                            AnswersAnswersAnswers
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <View style = {styles.iconField}>
                            <Icon
                                style = {styles.iconStyle}
                                name="thumb-up"
                                color= {this.state.firstVotingPanel.counterVote === 1 ? "#00FF00" : "#000000"}
                                onPress={this.incrementCounterForFirstComment}
                            />
                            <Text style = {styles.textData}>
                                {firstVotingPanel.counter}
                            </Text>
                            <Icon
                                style={styles.iconStyle}
                                name="thumb-down"
                                color={this.state.firstVotingPanel.counterVote === -1 ? "#FF0000" : "#000000"}
                                onPress={this.decrementCounterForFirstComment}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View style = {styles.row}>
                        <View>
                            <Card containerStyle={styles.cardContainer}>
                                <View style = {styles.userAnswer}>
                                    <View style = {styles.userDataField}>
                                        <Text  style = {styles.textUserData}>
                                            User1
                                        </Text>
                                    </View>
                                    <View style = {styles.userTextField}>
                                        <Text  style = {styles.textUserData}>
                                            AnswersAnswersAnswers
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <View style = {styles.iconField}>
                            <Icon
                                style = {styles.iconStyle}
                                name="thumb-up"
                                color= {this.state.secondVotingPanel.counterVote === 1 ? "#00FF00" : "#000000"}
                                onPress={this.incrementCounterForSecondComment}
                            />
                            <Text style = {styles.textData}>
                                {secondVotingPanel.counter}
                            </Text>
                            <Icon
                                style={styles.iconStyle}
                                name="thumb-down"
                                color={this.state.secondVotingPanel.counterVote === -1 ? "#FF0000" : "#000000"}
                                onPress={this.decrementCounterForSecondComment}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    {this.state.votingPanels.map(comment => (
                        <Text> todo taking object from list</Text>
                    ))}
                </View>
                <View>
                    <Card containerStyle={styles.addAnswerContainer}>
                        <View>
                            <TextInput
                                placeholder = "Dodaj komentarz"
                            />
                        </View>
                        <View style={styles.row}>
                            <View style = {styles.buttonViewLeft}>
                                <Button title="Anuluj" buttonStyle = {styles.buttonLeft} />
                            </View>
                            <View style = {styles.buttonViewRight}>
                                <Button title="Dodaj" buttonStyle = {styles.buttonRight}/>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
        )
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
    backgroundColor: 'blue',
    width: '70%'
  },
    buttonLeft: {
        backgroundColor: 'blue',
        width: '70%',

    },
    buttonViewLeft:{
        alignItems:"flex-start",
        alignContent:"center"
    },
    buttonViewRight:{
       alignItems:"flex-end"
    },
  iconField:{
       marginTop: 30,
      width: 20,
      maxWidth: 30,
      marginRight: 20,
      alignItems: "center",
      marginLeft: 0,
  },
  userTextField:{
    flex: 1,
    minHeight: 100,
    minWidth: 280,
  },
  userDataField:{
      flex: 1,
      borderRightWidth: 1,
      borderRightColor: "black",
      minWidth: 80,
  },

  textUserData:{
      marginTop: 5,
      textAlign: "center",
      textAlignVertical: "center",
      color: "black"
  },
  cardContainer:{
      elevation:2,
      padding: 0,
      margin: 0,
      marginRight: 10,
      marginTop: 30,
      minWidth: 360,
  },
  addAnswerContainer:{
      elevation:2,
      padding: 0,
      margin: 0,
      marginTop: 30,
      marginBottom: 0,
      minHeight: 185
  },
  iconStyle: {
      marginTop: 10,
      marginBottom: 5,
  },
    textData:{
        marginBottom:5,
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    }
});


