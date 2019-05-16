import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { connectSearchBox } from "react-instantsearch/connectors";

interface Props {
  onChangeText: (text: string) => void;
  value: string;
}

export const SearchBoxComponent: React.FC<Props> = ({
  onChangeText,
  value,
}) => (
  <View style={styles.searchTextContainer}>
    <TextInput
      onChangeText={onChangeText}
      value={value}
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

export const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
  return (
    <SearchBoxComponent
      onChangeText={text => refine(text)}
      value={currentRefinement}
    />
  );
});

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
