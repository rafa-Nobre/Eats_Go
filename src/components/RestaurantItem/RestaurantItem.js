import { Image, StyleSheet, Text, View } from 'react-native'

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image
        }}
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>

        <View style={styles.ratingContainer}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5
  },
  subtitle: {
    color: 'grey'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingContainer: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  }
})

export default RestaurantItem
