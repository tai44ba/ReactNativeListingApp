import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";

const GoalInput = ({ addGaol, isVisible, closeModal }) => {
  const [goal, setGoal] = useState("");
  const handleInput = (input) => {
    setGoal(input);
  };
  const handleAddGaol = () => {
    addGaol(goal);
    setGoal('')
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/image/goal.png')} style={styles.image} />
        <TextInput
          placeholder=" Your goal"
          style={styles.textInput}
          onChangeText={handleInput}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" color="#38c9bc" onPress={handleAddGaol} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#e2478b" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:'#7d9f2d'
  },
  textInput: {
    width: "100%",
    borderColor: "#ecf7e6",
    backgroundColor: '#ecf7e6',
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:16
  },
  button: {
    width: 100,
    marginHorizontal:16
  },
  image: {
    width:100,
    height:100,
    margin:20,
  }
});

export default GoalInput;
