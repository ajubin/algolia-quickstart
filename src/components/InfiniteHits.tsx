import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connectInfiniteHits } from "react-instantsearch-native";

interface Props {
  hits: Hit[];
  hasMore: boolean;
  refine: Function;
}

export const InfiniteHitsComponent: React.FC<Props> = ({
  hits,
  hasMore,
  refine,
}) => (
  <View style={styles.container}>
    <FlatList
      data={hits}
      onEndReached={() => hasMore && refine()}
      keyExtractor={item => item.objectID}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text numberOfLines={1} style={styles.titleText}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.mediumItalic}>
            {item.variety}
          </Text>
          <Text numberOfLines={4} style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.rowContainer}>
            <Text>{item.price} $</Text>
            <Text>{item.points} / 100</Text>
          </View>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  separator: {
    marginTop: 16,
    marginBottom: 16,
    height: 1,
    backgroundColor: "#DDDDDD",
  },
  item: {
    flexDirection: "column",
  },
  titleText: {
    fontWeight: "bold",
    paddingBottom: 8,
  },
  mediumItalic: {
    fontStyle: "italic",
    paddingBottom: 4,
  },
  description: {
    paddingBottom: 4,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});

//@ts-ignore
export const InfiniteHits = connectInfiniteHits(InfiniteHitsComponent);
