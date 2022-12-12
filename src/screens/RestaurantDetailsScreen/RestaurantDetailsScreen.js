import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import restaurantsData from '../../../assets/data/restaurants.json'

const restaurantInfo = restaurantsData[0]

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurantInfo.image }} style={styles.image} />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{restaurantInfo.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurantInfo.deliveryFee} &#8226; {restaurantInfo.minDeliveryTime}
          -{restaurantInfo.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    color: 'gray',
    fontSize: 15
  }
})

export default RestaurantDetailsScreen
