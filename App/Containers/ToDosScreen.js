import React, { Component } from 'react'
import Header from '../Components/Header'
import { View } from 'react-native'

// Styles
import styles from './Styles/ToDosScreenStyle'

export default class ToDosScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Header />
      </View>
    )
  }
}
