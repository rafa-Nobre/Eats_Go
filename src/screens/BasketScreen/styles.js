import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 40,
    padding: 10
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3
  },
  itemName: {
    fontWeight: '600'
  },
  price: {
    marginLeft: 'auto'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18
  }
})
