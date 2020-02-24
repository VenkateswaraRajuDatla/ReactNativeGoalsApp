import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode]= useState(false);
  const addGoalHandler = (Goal) => {
    setCourseGoals([...courseGoals, { key: Math.random().toString(), value: Goal }]);
    setIsAddMode(false);
  }
  const cancelAddGoalHandler = ()=>{
    setIsAddMode(false);
  }
  const onDeleteHandler = (keyId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== keyId);
    });
  }
  return (
    <View style={styles.screen}>
      <Button title="Add a new Goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} addGoal={addGoalHandler} cancelIsMode={cancelAddGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem title={itemData.item.value} keyId={itemData.item.key} onDelete={onDeleteHandler} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
