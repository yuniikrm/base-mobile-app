import React from 'react'
import { object } from 'prop-types'
import Home from '../../components/views/home'

const HomeScreen = ({ navigation }) => (
  <Home navigation={navigation} />
)

HomeScreen.propTypes = {
  navigation: object.isRequired
}

export default HomeScreen
