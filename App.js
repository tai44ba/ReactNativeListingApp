import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./conponents/GoalInput";
import GoalList from "./conponents/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [listOfGoals, setListOfGaols] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModal = () => {
    setModalIsVisible(true);
  };
  const closeModal = () => {
    setModalIsVisible(false);
  };

  const addGaol = (goal) => {
    setListOfGaols((lists) => [
      ...lists,
      { text: goal, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };
  const deleteItem = (id) => {
    setListOfGaols((listOfItems) =>
      listOfItems.filter((item) => item.id !== id)
    );
  };
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="Add New Goal" color="#38c9bc" onPress={openModal} />
        </View>
        <GoalInput
          addGaol={addGaol}
          isVisible={modalIsVisible}
          closeModal={closeModal}
        />
        <View style={styles.gaolContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalList
                  text={itemData.item.text}
                  deleteItem={deleteItem}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  gaolContainer: {
    flex: 6,
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 6,
  },
});
