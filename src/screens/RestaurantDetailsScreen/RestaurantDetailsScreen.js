import { View, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import restaurantsData from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem/DishListItem'
import Header from './Header'
import styles from './styles'

const restaurantInfo = restaurantsData[0]

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurantInfo} />}
        data={restaurantInfo.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        showsVerticalScrollIndicator={false}
      />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  )
}

export default RestaurantDetailsScreen
