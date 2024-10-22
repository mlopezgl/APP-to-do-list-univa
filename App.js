import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'To Do List' }} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Agregar Tarea' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
