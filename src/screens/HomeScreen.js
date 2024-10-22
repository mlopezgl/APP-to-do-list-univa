import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import Task from '../models/Task';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAddTask = (taskTitle) => {
    const newTask = new Task(Date.now().toString(), taskTitle);
    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ToDoItem task={item} onDelete={handleDeleteTask} />
        )}
        keyExtractor={item => item.id}
      />
      <Button
        title="Agregar Tarea"
        onPress={() => navigation.navigate('AddTask', { addTask: handleAddTask })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
