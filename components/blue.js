import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Blue = () => {
  return (
    <View style={styles.container}>
      <Text>Blue</Text>
    </View>
  )
}

export default Blue

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
    }
})