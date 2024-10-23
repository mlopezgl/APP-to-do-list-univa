import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../models/Task';

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

export const saveTask = async (tasks: Task[]): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error('Failed to save tasks', e);
    }
};

export const loadTasks = async (): Promise<Task[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Failed to load tasks', e);
        return [];
    }
};