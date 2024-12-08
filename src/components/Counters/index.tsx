import { Text, View } from 'react-native'
import { styles } from './styles'

type CountersProps = {
  total: number
  totalDone: number
}

export function Counters({ total, totalDone }: CountersProps) {
  return (
    <View style={styles.counter}>
      <View style={styles.counterItem}>
        <Text style={styles.counterTextLeft}>Creadas</Text>
        <Text style={styles.counterNumber}>{total}</Text>
      </View>

      <View style={styles.counterItem}>
        <Text style={styles.counterTextRight}>Concluídas</Text>
        <Text style={styles.counterNumber}>{totalDone}</Text>
      </View>
    </View>
  )
}
