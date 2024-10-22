import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTaskScreen({ route, navigation }: any) {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = route.params;

  const handleAddTask = () => {
    if (taskTitle.length > 0) {
      addTask(taskTitle);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe una nueva tarea"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Agregar" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
