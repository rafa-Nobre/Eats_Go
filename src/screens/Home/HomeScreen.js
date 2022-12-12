import { StyleSheet, FlatList } from 'react-native'
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem'
import restaurantsData from '../../../assets/data/restaurants.json'

const HomeScreen = () => {
  return (
    <FlatList
      data={restaurantsData}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
