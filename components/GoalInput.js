import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const inputChangeHandler = (goal) => {
        setEnteredGoal(goal);
    }
    const addGoalHandler = () => {
        props.addGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input}
                    onChangeText={inputChangeHandler}
                    value={enteredGoal} color='black' />
                <View style={styles.buttonStyle}>
                    <Button title="Cancel" color='red' onPress={props.cancelIsMode} />
                    <Button title="Add" onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default GoalInput;