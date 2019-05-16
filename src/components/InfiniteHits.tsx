import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Hit } from "../interfaces/algolia";

const hits: Hit[] = [
  {
    points: 98,
    title: "M. Chapoutier 1999 Le Méal Ermitage  (Hermitage)",
    description:
      "Chapoutier's selections of the best parcels of vines in Hermitage are set to become legendary. Sold under the ancient spelling of the appellation name (Ermitage), they represent the epitome of the power and concentration that lies behind the reputation of the appellation. This cuvée is the best of the collection, with its brooding, opaque character, suggesting rather than revealing power at this stage. Age it until your new-born baby is old enough to drink, and it will be just about ready.",
    taster_name: "Roger Voss",
    taster_twitter_handle: "@vossroger",
    price: 150,
    designation: "Le Méal Ermitage",
    variety: "Rhône-style Red Blend",
    region_1: "Hermitage",
    region_2: "",
    province: "Rhône Valley",
    country: "France",
    winery: "M. Chapoutier",
    objectID: "12456",
  },
  {
    points: 95,
    title: "E. Guigal 1998 La Turque  (Côte Rôtie)",
    description:
      "A firm, dry, foursquare wine that has power and structure rather than the immediate perfumes of La Mouline, the partner cuvée from Guigal. This is the wine for those who want power with big tannins, and they don't come more powerful or tannic than this. Its aging potential is enormous:  after 10 years there should be more sign of the perfumed fruit which is there, somewhere.",
    taster_name: "Roger Voss",
    taster_twitter_handle: "@vossroger",
    price: 175,
    designation: "La Turque",
    variety: "Rhône-style Red Blend",
    region_1: "Côte Rôtie",
    region_2: "",
    province: "Rhône Valley",
    country: "France",
    winery: "E. Guigal",
    objectID: "124567",
  },
];

export const InfiniteHits: React.FC = () => (
  <View style={styles.container}>
    <FlatList
      data={hits}
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
