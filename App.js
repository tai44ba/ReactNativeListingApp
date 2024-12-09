
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [listOfGoals, setListOfGaols] = useState([])
  const handleInput = (input) => {
    setGoal(input);
  };
  const addGaol = () => {
    setListOfGaols((lists)=>[...lists,goal])
    setGoal('')
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder=" Your goal"
          style={styles.textInput}
          onChangeText={handleInput}
          value={goal}
        />
        <Button title="add goal" style={styles.button} onPress={addGaol} />
      </View>
      <View style={styles.gaolContainer}>
        {listOfGoals.map((goal)=><Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    width: "70%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    margin: 8,
    padding: 8,
  },
  button: {
    width: "auto",
    alignItems: "center",
  },
  gaolContainer: {
    flex: 6,
  },
});
