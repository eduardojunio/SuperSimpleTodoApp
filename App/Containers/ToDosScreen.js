import React, { Component } from 'react'
import Header from '../Components/Header'
import FullButton from '../Components/FullButton'
import { View } from 'react-native'

// Styles
import styles from './Styles/ToDosScreenStyle'
import ToDoItem from '../Components/ToDoItem'

export default class ToDosScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Header />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <FullButton text={'Adicionar'} />
      </View>
    )
  }
}
