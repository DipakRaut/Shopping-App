import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

class ResponseButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.listener}>
        <View
          style={[
            styles.circleBackground,
            {
              backgroundColor: this.props.value ? this.props.color : "#195fbc",
            },
          ]}
        >
          <View style={styles.innerCircle}>{this.props.children}</View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ResponseButton;

const styles = StyleSheet.create({
  circleBackground: {
    borderRadius: 180,
    width: 45,
    height: 45,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  innerCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#01011f",
    borderRadius: 180,
    justifyContent: "center",
    alignItems: "center",
  },
});
