import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login'
import Home from '../screens/home'
import Profile from '../screens/profile'
import { commonStore } from '../store'

const Navigations = () => {
  const { getState } = commonStore
  const { token } = getState()
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      {
        !token ? (
          <Stack.Screen
            name="Login"
            component={Login}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
            />
          </>
        )
      }
    </Stack.Navigator>
  )
}

export default Navigations
