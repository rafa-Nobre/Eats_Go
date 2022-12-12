import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import RestaurantItem from './src/components/RestaurantItem/RestaurantItem'
import restaurantsData from './assets/data/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantItem restaurant={restaurantsData[0]} />
      <RestaurantItem restaurant={restaurantsData[1]} />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
})
