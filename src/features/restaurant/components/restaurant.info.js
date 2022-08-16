import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

export const RestaurantInfo = ({
  name = "Some Restaurant",
  icon,
  photos = ["https://picsum.photos/700"],
  address = "100 some random street",
  isOpen = true,
  rating = 4,
  isClosedTemporarily,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cardCover} source={{ uri: `${photos[0]}` }} />

      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: {
    padding: 15,
  },
});
