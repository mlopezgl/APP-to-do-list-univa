import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ToDoItem({ task, onDelete }) {
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
