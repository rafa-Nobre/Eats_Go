import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import restaurantsData from '../../../assets/data/restaurants.json'

const dishSample = restaurantsData[0].dishes[0]

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1)

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const onPlus = () => {
    setQuantity(quantity + 1)
  }

  const getTotal = () => {
    return (dishSample.price * quantity).toFixed(2)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{dishSample.name}</Text>
      <Text style={styles.description}>{dishSample.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color={'black'}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={'black'}
          onPress={onPlus}
        />
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket ($ {getTotal()})
        </Text>
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
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10
  },
  description: {
    color: 'gray'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20
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

export default DishDetailsScreen
