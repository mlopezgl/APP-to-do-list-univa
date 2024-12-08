import { Image, SafeAreaView, View, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import uuid from 'react-native-uuid'

import { Form } from '../../components/Form'
import { Counters } from '../../components/Counters'
import { Empty } from '../../components/Empty'
import { Task, TaskItem } from '../../components/Task'
import { useMemo, useState } from 'react'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 'kncnsc',
      description: 'Hacer el proyecto de Programacion Movil',
      done: true,
    },
    {
      id: 'ncsjcnsjc',
      description: 'Dormir 8h por dia',
      done: false,
    },
  ])

  function handleCreateTask(description: string) {
    const newTask = {
      id: uuid.v4(),
      description,
      done: false,
    }

    if (description.trim() === '') {
      return Alert.alert(
        'Actividad no válida',
        'Describir la actividad a realizar.',
      )
    }

    setTasks(prev => [newTask, ...prev])
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Eliminar Actividad', `¿Deseas eliminar la actividad?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => setTasks(prev => prev.filter(item => item.id !== id)),
        style: 'destructive',
      },
    ])
  }

  function handleToggleTaskStatus(id: string) {
    setTasks(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        }

        return item
      }),
    )
  }

  const countFinishedTasks = useMemo(() => {
    return tasks.filter(item => !!item.done).length
  }, [tasks])

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Image
          source={require('../../assets/brand.png')}
          style={styles.brand}
        />
      </SafeAreaView>

      <Form onCreate={handleCreateTask} />
      <Counters total={tasks.length} totalDone={countFinishedTasks} />

      <FlatList
        data={tasks}
        style={styles.list}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            key={item.id}
            onRemove={() => handleRemoveTask(item.id)}
            onToggleStatus={() => handleToggleTaskStatus(item.id)}
          />
        )}
        ListEmptyComponent={() => <Empty />}
      />

      <SafeAreaView />
    </View>
  )
}
