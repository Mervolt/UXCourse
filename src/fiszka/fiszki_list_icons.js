import * as React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default class FiszkiListIcons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //TODO OODSTEPY MIEDZY ELEMENTAMI
      <View style={styles.iconsRow}>
        {this.props.isStar && <Icon name="star" iconStyle={{ margin: 5 }} />}
        {this.props.isVisible !== 0 &&
          this.createVisibility(this.props.isVisible)}
        {this.createThumbs(this.props.thumbs)}
      </View>
    );
  }

  createVisibility(visibility) {
    if (visibility === -1) {
      return <Icon name="visibility-off" iconStyle={{ margin: 5 }} />;
    } else if (visibility === 1) {
      return <Icon name="visibility" iconStyle={{ margin: 5 }} />;
    }
  }

  createThumbs(thumbs) {
    if (thumbs < 0) {
      return (
        <View style={styles.thumb}>
          <Icon name="thumb-down" iconStyle={{ margin: 5 }} />
          <Text style={styles.dislikeThumbText}>{thumbs}</Text>
        </View>
      );
    } else
      return (
        <View style={styles.thumb}>
          <Icon name="thumb-up" iconStyle={{ margin: 5 }} />
          <Text style={styles.likeThumbText}>{thumbs}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  iconsRow: {
    flexDirection: "row"
  },
  thumb: {
    flexDirection: "row"
  },
  likeThumbText: {
    color: "#15ad00",
    fontSize: responsiveFontSize(2),
    marginTop: 8
  },
  dislikeThumbText: {
    color: "#F44336",
    fontSize: responsiveFontSize(2),
    marginTop: 3
  }
});
