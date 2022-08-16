import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

export const RestaurantInfoCard = ({
  name = "Some Restaurant",
  icon,
  photos = ["https://picsum.photos/700"],
  address = "100 some random street",
  isOpen = true,
  rating = 4,
  isClosedTemporarily,
}) => {
  return (
    <Card elevation={6} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cardCover}
        source={{ uri: `${photos[0]}` }}
      />

      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: {
    padding: 15,
  },
  title: {
    padding: 16,
  },
});
