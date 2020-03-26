import React from "react";
import { View, Button } from "react-native";

export default () => (
  <View style={{ flex: 1 }}>
    <Button title="Opção1" onPress={() => alert("todo!")} />
    <Button title="Opção2" onPress={() => alert("todo!")} />
  </View>
);
