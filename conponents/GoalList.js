import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalList = ({ text, deleteItem, id }) => {
  return (
    <View style={styles.listItem}>
      <Pressable onPress={deleteItem.bind(this, id)} style={({pressed})=>pressed && styles.pressedItem}>
        <Text style={styles.listText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    margin: 8,
    backgroundColor: "#7d9f2d",
  },
  listText: {
    padding: 10,
    color: "white",
  },
  pressedItem:{
    opacity:0.6
  }
});

export default GoalList;
