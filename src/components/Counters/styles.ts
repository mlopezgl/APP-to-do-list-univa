import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 20,
  },

  counterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  counterTextLeft: {
    fontSize: 14,
    fontWeight: 700,
    color: '#4EA8DE',
  },

  counterTextRight: {
    fontSize: 14,
    fontWeight: 700,
    color: '#8284FA',
  },

  counterNumber: {
    width: 30,
    fontSize: 12,
    fontWeight: 700,
    color: '#fff',
    backgroundColor: '#333',
    textAlign: 'center',
    padding: 3,
    borderRadius: 99,
  },
})
