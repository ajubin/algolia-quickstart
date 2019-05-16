/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { SearchBox, InfiniteHits } from "./src/components";

interface Props {}
export class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBox />
        <InfiniteHits />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
});
