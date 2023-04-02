import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#BF40BF" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#560acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
    padding: 8,
  },
  pressedItem:{
    opacity:0.5
  }
});

export default GoalItem;
