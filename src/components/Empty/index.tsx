import { View, Text } from 'react-native'
import { styles } from './styles'
import { ClipboardListIcon } from 'lucide-react-native'

export function Empty() {
  return (
    <View style={styles.container}>
      <ClipboardListIcon size={56} strokeWidth={1.25} style={styles.icon} />
      <Text style={styles.title}>Aún no tienes tareas registradas</Text>
      <Text style={styles.text}>
        Crea tareas y organiza tus tareas pendientes
      </Text>
    </View>
  )
}
