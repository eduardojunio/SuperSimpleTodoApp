import * as React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, TouchableOpacity, View } from 'react-native'
import _ from 'lodash'

import styles from './Styles/ToDoItemStyle'

export default class ToDoItem extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.check}>
          <View style={styles.circle}>
            <Icon name={'ios-checkmark'} size={45} color={'#000'} />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>{_.truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit', {
          'length': 45,
          'separator': /,? +/
        })}</Text>
      </View>
    )
  }
}
