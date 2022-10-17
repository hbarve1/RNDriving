import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Badge from "./src/components/Badge";
import Block from "./src/components/Block";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <Block>
      <Navigation />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
