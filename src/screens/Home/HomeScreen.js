import { View, StyleSheet, FlatList } from 'react-native'
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem'
import restaurantsData from '../../../assets/data/restaurants.json'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantsData}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default HomeScreen
