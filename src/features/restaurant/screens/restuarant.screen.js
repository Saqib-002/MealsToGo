import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export default function RestaurantScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search the restaurant" />
        </View>
        <View style={styles.list}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight && StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: "green",
    flex: 1,
    padding: 16,
  },
});
