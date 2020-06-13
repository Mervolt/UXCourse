import * as React from "react";
import {View} from "react-native";
import {Button, Icon, Overlay, SearchBar} from "react-native-elements";
import FiszkiList from "./fiszki_list_item";
import NewFiszkaPopup from "./NewFiszkaPopup";
import FixedHeader from "../components/header";

export default class FiszkiListView extends React.Component {

    constructor(props) {
        super(props)
        console.log("D");
        console.log(this.props);
        this.state = {
            allFiszki: this.props.navigation.state.params.fiszki,
            currFiszki: this.props.navigation.state.params.fiszki.sort(this.compareFiszki),
            searchField: '',
            overlayVisible: false,
            expandedFiszka: -1
        }
    }

    compareFiszki(a, b) {
        if (a.isStar === b.isStar) {
            return a.thumbs < b.thumbs
        } else {
            return a.isStar ? -1 : 1
        }
    }

    render() {
        return (
            <View>
                <SearchBar
                    inputStyle={{backgroundColor: 'white'}}
                    containerStyle={{backgroundColor: '#348dea'}}
                    inputContainerStyle={{backgroundColor: 'white'}}
                    placeholder={'Wyszukaj fiszkę...'}
                    onChangeText={text => {
                        this.searchFiszki(text)
                    }}
                    onClear={text => this.searchFiszki('')}
                    value={this.state.searchField}
                    round
                />
                <View style={{alignItems: 'flex-end', backgroundColor: '#fff', height: 70}}>
                    <Button
                        buttonStyle={{backgroundColor: 'white'}}
                        icon={<Icon
                            name={'add'}
                            reverse
                            size={20}
                            color={'rgb(255,94,0)'}
                        />}
                        onPress={this.toggleCreateFiszka}
                    />
                    <Overlay
                        isVisible={this.state.overlayVisible}
                        onBackdropPress={this.toggleCreateFiszka}
                        children={<NewFiszkaPopup
                            newFiszkaFunction={this.addFiszka}
                            closeOverlay={this.toggleCreateFiszka}
                        />}
                    />
                </View>
                <View>
                    <FiszkiList
                        fiszki={this.state.currFiszki}
                        expandedFiszka={this.state.expandedFiszka}
                        setFiszkaTouched={this.setFiszkaTouched.bind(this)}
                        removeFiszkaTouched={this.removeFiszkaTouched.bind(this)}
                    />
                </View>
            </View>
        );
    }

    setFiszkaTouched = (index) => {
        this.setState({
            expandedFiszka: index
        })
    };

    removeFiszkaTouched = () => {
        this.setState({
            expandedFiszka: -1
        })
    };

    toggleCreateFiszka = () => {
        this.setState({
            overlayVisible: !this.state.overlayVisible
        })
    };

    addFiszka = (fiszka) => {
        console.debug(this.state.currFiszki.length)
        this.state.allFiszki.push(fiszka)
        this.setState({
            currFiszki: Array.from(this.state.allFiszki).sort(this.compareFiszki)
        })
    }

    searchFiszki(text) {
        const newData = this.state.allFiszki.filter(function (fiszka) {
            if (text === '')
                return true

            return fiszka.description.startsWith(text)
        })
            .sort(this.compareFiszki)

        this.setState({
            currFiszki: newData,
            searchField: text
        })
    }

}
