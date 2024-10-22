import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface ToDoItemProps {
  task: { id: string, title: string };
  onDelete: (id: string) => void;
}

export default function ToDoItem({ task, onDelete }: ToDoItemProps) {
  return (
    <View style={styles.item}>
      <Text>{task.title}</Text>
      <Button title="Eliminar" onPress={() => onDelete(task.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
