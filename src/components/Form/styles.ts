import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  form: {
    marginTop: -27,
    marginBottom: 32,
    flexDirection: 'row',
    gap: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },

  input: {
    flex: 1,
    fontSize: 16,
    height: 54,
    padding: 16,
    backgroundColor: '#262626',
    color: '#fff',
    borderRadius: 6,
  },

  button: {
    width: 54,
    height: 54,
    color: '#fff',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },

  buttonIcon: {
    width: 16,
    height: 16,
    margin: 'auto',
    color: '#fff',
  },
})
