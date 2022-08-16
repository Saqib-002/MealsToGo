import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { RestaurantInfo } from "../components/restaurant.info";

const isAndroid = Platform.OS === "android";
export default function RestaurantScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search the restaurant" />
        </View>
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
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
