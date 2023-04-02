import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";
import { StatusBar } from 'expo-status-bar';

// importing custom components
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible,setModalIsVisible] = useState(false);

  // functions
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    // best way of updating state if new state depends on the previous state
    // setCourseGoals([...courseGoals,enteredGoalText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text:enteredGoalText,id:Math.random().toString()},
    ]);
    // closes modal overlay
    endAddGoalHandler();
    // console.log("goal",{text:enteredGoalText,key:Math.random().toString()});
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      const filteredGoals = currentCourseGoals.filter(item => item.id !== id);
      return filteredGoals;
    });
  };

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />}
          keyExtractor={(item,index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

// style sheet object approach
// - seperates jsx code and styling & reusable styles
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor:'#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
