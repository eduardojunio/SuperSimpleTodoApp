import React, { Component } from 'react'
import { View } from 'react-native'
import ToDosScreen from './App/Containers/ToDosScreen'

export default class App extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <ToDosScreen />
      </View>
    )
  }
}
