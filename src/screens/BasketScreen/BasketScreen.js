import { View, Text, FlatList, StyleSheet } from 'react-native'
import restaurantsData from '../../../assets/data/restaurants.json'

const restaurantSample = restaurantsData[0]

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.itemName}>{basketDish.name}</Text>
      <Text style={styles.price}>$ {basketDish.price}</Text>
    </View>
  )
}

const BasketScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{restaurantSample.name}</Text>

      <Text style={styles.title}>Your Items</Text>

      <FlatList
        data={restaurantSample.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default BasketScreen
