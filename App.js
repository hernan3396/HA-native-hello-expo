import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { Header, Footer } from "./utils";

export default function App() {
  return (
    <View>
      <Header />
      <Text>Aca va la app</Text>
      <Footer />
    </View>
  );
}

const FlexDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{ backgroundColor: "yellow", flex: 1, marginHorizontal: 50 }}
      />
      <Header />
      <View style={{ backgroundColor: "black", flex: 2 }} />
      <View style={{ backgroundColor: "yellow", flex: 1 }} />
    </View>
  );
};

const Texto = () => {
  const [nombre, setNombre] = useState("");
  return (
    <View style={{ paddingTop: 50 }}>
      <TextInput
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
        style={{ height: 50 }}
      />
      <Text>{nombre ? `Tu nombre es : ${nombre}` : "Escriba su nombre"}</Text>
      <Button title="OK" onPress={() => Alert.alert("ok", "todo ok")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
