import * as React from 'react';
import {ListItem} from 'react-native-elements'
import FiszkiListIcons from "./fiszki_list_icons";
import {View, ScrollView, StyleSheet} from "react-native";
import {responsiveHeight, responsiveFontSize} from "react-native-responsive-dimensions";

export default class FiszkiList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                {this.props.fiszki.map((l, i) => (
                    <View>
                        {this.props.expandedFiszka !== i &&
                        <ListItem
                            onPress={() => this.resolveTouchOnItem(i)}
                            bottomDivider
                            key={i}
                            subtitle={l.description}
                            rightElement={<FiszkiListIcons
                                isStar={l.isStar}
                                isVisible={l.isVisible}
                                thumbs={l.thumbs}
                            />}
                        />
                        }
                        {this.props.expandedFiszka === i &&
                        <View>
                            <ListItem
                                onPress={() => this.resolveTouchOnItem(i)}
                                key={i}
                                subtitle={l.description}
                                topDivider
                                style={styles.expandedElementTop}
                                containerStyle={styles.expandedElementTopContainer}
                                rightElement={<FiszkiListIcons
                                    isStar={l.isStar}
                                    isVisible={l.isVisible}
                                    thumbs={l.thumbs}
                                />}
                            />
                            <ListItem
                                key={-1}
                                containerStyle={styles.expandedElementDownContainer}
                                style={styles.expandedElementDown}
                                subtitle={l.answer}
                                bottomDivider
                                subtitleStyle={styles.expandedElementDownText}
                            />
                        </View>
                        }
                    </View>
                ))}
            </ScrollView>
        )
    }

    resolveTouchOnItem(index) {
        if (this.props.expandedFiszka === index) {
            this.props.removeFiszkaTouched()
        } else {
            this.props.setFiszkaTouched(index)
        }
    }
}


const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: "white",
        height: responsiveHeight(75)
    },
    expandedElementTop: {
        borderTopWidth: 1,
        borderTopColor:"#868686"
    },
    expandedElementTopContainer: {
        backgroundColor: "#cecece"
    },
    expandedElementDown: {
        borderBottomWidth: 1,
        borderBottomColor:"#868686",
        textAlignVertical:'top'
    },
    expandedElementDownContainer: {
        backgroundColor: "#cecece"

    },
    expandedElementDownText: {
        textAlign: "center",
        fontSize:responsiveFontSize(2.5)
    }
})