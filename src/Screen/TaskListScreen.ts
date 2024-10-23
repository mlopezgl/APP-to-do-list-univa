import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { Task, createTask } from '../models/Task';
import TaskItem from '../components/TaskItem';
import { saveTask, loadTask } from '../services/TaskService';
import style from '../styles/styles'; 

const TaskListScreen = () => {
    const [taskText, setTaskText] = useState<string>(' ');
    const [tasks, setTasks] = useState<Task[]>( [] );

    useEffect(() => {
        const fetchTasks = async () => {
            const loadedTask = await loadTasks();
            setTasks(loadedTasks);
        };
        fetchTasks();
    }, []);

    useEffect(() => {
        saveTask(tasks);
    }, [tasks]);

    const addTask = () => {
        if (taskText.trim()) {
            const newTask = createTask(Date.now(), taskText);
            setTasks([...tasks, newTask]);
            setTaskText('');
        }
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id != id));
    };

    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                value={taskText}
                onChangeText={setTaskText}
                placeholder="Add a new task"
            />
            <Button title="Add Task" onPress={addTask} />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TaskItem task={item} deleteTask={deleteTask} />
                )}
            />
        </View>
    );
};

export default TaskListScreen;