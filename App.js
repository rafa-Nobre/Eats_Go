import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList } from 'react-native'
import RestaurantItem from './src/components/RestaurantItem/RestaurantItem'
import restaurantsData from './assets/data/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantsData}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />

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
