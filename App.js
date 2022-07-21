import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function handleCounterAdd() {
    setCounter(counter + 1);
  }

  function handleCounterMinus() {
    setCounter(counter - 1);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Counter</Text>
      </View>
      <View style={styles.counterContainer}>
        <Text>{counter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="+" onPress={handleCounterAdd} color="#171716" />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={handleCounterMinus} color="#171716" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f07b16",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    padding: 8,
    width: "20%",
  },
  counterContainer: {
    paddingBottom: 20,
  },
  titleContainer: {
    marginBottom: "50%",
  },
  titleText: {
    fontSize: 50,
  },
});
