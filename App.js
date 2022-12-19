import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screens/Home/HomeScreen'
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen'
import DishDetailsScreen from './src/screens/DishDetailsScreen/DishDetailsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RestaurantDetailsScreen /> */}
      <DishDetailsScreen />

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
