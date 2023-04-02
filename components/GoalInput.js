import { useState } from 'react';
import {View,TextInput,Button,StyleSheet, Modal, Image} from 'react-native';
import goalImage from "../assets/images/goal.png";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState("");

    // functions
    function goalInputHandler(goalText) {
        setEnteredGoalText(goalText);
      };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };
    // debugging process
    // console.log("GoalInput Component rendered!");
    // console.log("enteredGoalText",enteredGoalText);
    debugger;

    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={goalImage} />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color="#f31282" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
          <Button title="Add Goal" color="#560acc" onPress={addGoalHandler} />
          </View>
        </View>
        
      </View>
      </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:16,
        backgroundColor:'#311b6b',
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:'#e4d0ff',
        width: "100%",
        padding: 13,
        borderRadius: 6,
        color:'#120438',
        fontWeight:'400'
      },
      buttonsContainer:{
        flexDirection:'row',
        margin:16
      },
      button:{
        width:100,
        marginHorizontal:8
      },
      image:{
        height:100,
        width:100,
        margin:20
      }
});

export default GoalInput;