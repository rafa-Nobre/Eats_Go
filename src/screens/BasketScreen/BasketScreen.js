import { View, Text, FlatList } from 'react-native'
import restaurantsData from '../../../assets/data/restaurants.json'
import BasketDishItem from './BasketDishItem'
import styles from './styles'

const restaurantSample = restaurantsData[0]

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

export default BasketScreen
