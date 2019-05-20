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
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { SearchBox, InfiniteHits } from "./src/components";
import {
  ALGOLIA_APP_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_SEARCH_KEY,
} from "react-native-dotenv";
import { InstantSearch, connectStats } from "react-instantsearch-native";

interface Props {}
export class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <InstantSearch
          apiKey={ALGOLIA_SEARCH_KEY}
          appId={ALGOLIA_APP_ID}
          indexName={ALGOLIA_INDEX_NAME}
        >
          <SearchBox />
          <ConnectedStats />
          <InfiniteHits />
        </InstantSearch>
      </SafeAreaView>
    );
  }
}

const ConnectedStats = connectStats(({ nbHits }) => (
  <Text style={{ paddingLeft: 16 }}>
    {nbHits.toLocaleString()} wine matching !
  </Text>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
});
