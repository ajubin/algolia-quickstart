import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export const SearchBox: React.FC = () => (
  <View style={styles.searchTextContainer}>
    <TextInput
      style={styles.textBox}
      placeholder="fruity red and spicy"
      placeholderTextColor="#BBBBBB"
      clearButtonMode="always"
      spellCheck={true}
      autoCorrect={true}
      autoFocus={true}
    />
  </View>
);

const styles = StyleSheet.create({
  textBox: {
    padding: 10,
    margin: 10,
    color: "#6E6E6E",
    fontSize: 14,
  },
  searchTextContainer: {
    alignSelf: "stretch",
  },
});
