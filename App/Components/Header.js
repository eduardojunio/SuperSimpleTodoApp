import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Styles/HeaderStyle'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ToDos</Text>
        <TouchableOpacity>
          <Icon name={'ios-alert'} size={30} color={'#000'} />
        </TouchableOpacity>
      </View>
    )
  }
}
