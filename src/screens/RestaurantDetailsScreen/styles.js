import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10
  },
  infoContainer: {
    margin: 10
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10
  },
  subtitle: {
    color: '#525252',
    fontSize: 15
  },
  menuTitle: {
    marginVertical: 20,
    fontSize: 18,
    letterSpacing: 0.7
  }
})
