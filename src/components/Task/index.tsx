import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { CheckIcon, TrashIcon } from 'lucide-react-native'

export type Task = {
  id: string
  description: string
  done: boolean
}

type TaskItemProps = {
  task: Task
  onRemove: () => void
  onToggleStatus: () => void
}

export function TaskItem({ task, onToggleStatus, onRemove }: TaskItemProps) {
  return (
    <View style={styles.container}>
      {task.done ? (
        <TouchableOpacity style={styles.toggle} onPress={onToggleStatus}>
          <View style={styles.checked}>
            <CheckIcon size={16} strokeWidth={2} stroke="#ffffff" />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.toggle} onPress={onToggleStatus}>
          <View style={styles.unchecked}></View>
        </TouchableOpacity>
      )}

      <Text
        style={
          task.done
            ? [styles.description, styles.descriptionMarked]
            : styles.description
        }
      >
        {task.description}
      </Text>

      <TouchableOpacity style={styles.remove} onPress={onRemove}>
        <TrashIcon size={20} style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  )
}
