import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    borderRadius: 8,
    padding: 12,
    paddingRight: 10,
    backgroundColor: '#262626',
    borderColor: '#333',
    borderWidth: 1,
  },

  toggle: {
    width: 32,
    height: 32,
  },

  unchecked: {
    margin: 'auto',
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 50,
  },

  checked: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: 24,
    height: 24,
    backgroundColor: '#5E60CE',
    borderRadius: 50,
  },

  description: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },

  descriptionMarked: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },

  remove: {
    width: 32,
    height: 32,
  },

  removeIcon: {
    margin: 'auto',
    color: '#fff',
  },
})
