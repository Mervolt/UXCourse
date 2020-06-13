import * as React from 'react';
import {Input, Button} from "react-native-elements"
import {View, StyleSheet, Alert} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import {TextInput} from "react-native";

export default class NewFiszkaPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            answer: '',
            isVisible: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textFields}>
                    <TextInput
                        multiline
                        placeholder='Dodaj tytuł fiszki...'
                        onChangeText={value => this.setState({description: value})}
                        style={styles.descriptionInput}
                    />
                    <TextInput
                        multiline
                        placeholder='Dodaj definicję fiszki...'
                        onChangeText={value => this.setState({answer: value})}
                        style={styles.answerInput}

                    />
                </View>
                <View style={styles.buttonsRow}>
                    <Button
                        title="Anuluj"
                        onPress={this.props.closeOverlay}
                        buttonStyle={styles.cancelButton}
                        titleStyle={styles.cancelButtonTitle}
                    />
                    <Button
                        icon={{name: this.getVisibilityIcon(), size: 60}}
                        onPress={this.toggleVisibility}
                        buttonStyle={styles.visibilityButton}
                    />
                    <Button
                        title="Dodaj"
                        onPress={this.createNewFiszka}
                        buttonStyle={styles.okButton}
                        titleStyle={styles.okButtonTitle}
                    />
                </View>
            </View>
        )
    }

    getVisibilityIcon() {
        return this.state.isVisible ? 'visibility' : 'visibility-off'
    }

    openAlert(){
        alert('Opis i odpowiedź nie mogą być puste!')
    }

    createNewFiszka = () => {
        if (this.isEmptyString(this.state.description)|| this.isEmptyString(this.state.answer) ) {
            this.openAlert()
            return
        }

        let fiszka = {
            description: this.state.description,
            answer: this.state.answer,
            isStar: false,
            isVisible: this.state.isVisible ? 1 : -1,
            thumbs: 0
        }
        this.props.newFiszkaFunction(fiszka)
        this.props.closeOverlay()
    }

    toggleVisibility = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    isEmptyString(input){
        return( !input ||  input.trim().length === 0)
    }
}

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(75),
        width: responsiveWidth(100),
        alignItems: "center"
    },
    textFields: {
        height: responsiveHeight(65),
        width: responsiveWidth(100),
        alignItems: "center"
    },
    descriptionInput: {
        height: responsiveHeight(32.5),
        width: responsiveWidth(98),
        backgroundColor: '#5a5a5a',
        textAlign: "center",
        fontSize: 24
    },
    answerInput: {
        height: responsiveHeight(32.5),
        width: responsiveWidth(98),
        backgroundColor: '#adadad',
        textAlign: "center",
        fontSize: 24
    },
    buttonsRow: {
        width: responsiveWidth(98),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    visibilityButton: {
        backgroundColor: 'white'
    },
    okButton: {
        width: responsiveWidth(35)
    },
    okButtonTitle: {
        color: '#ffffff'
    },
    cancelButton: {
        width: responsiveWidth(35),
        backgroundColor: '#909090'
    },
    cancelButtonTitle: {
        color: '#363636'
    }


})
