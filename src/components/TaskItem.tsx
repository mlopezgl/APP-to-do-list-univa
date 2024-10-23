import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Task } from '../models/Task';
import styles from '../styles/styles';

interface TaskItemProps {
    task: Task;
    onToggComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggComplete, onDelete }) => {
    return (
        <TouchableOpacity onPress={() => onToggComplete(task.id)}>
            <View style={styles.taskContainer}>
                <Text style={[styles.taskText, task.completed && styles.completedTask]}>
                    {task.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default TaskItem;