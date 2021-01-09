import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '@screens/login'
import Home from '@screens/home'
import Profile from '@screens/profile'
import { userStore } from '@store'

const Navigations = (props) => {
  const token = userStore(state => state.data.token)
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      {
        !token && (
          <Stack.Screen
            name="Login"
            component={Login}
          />
        )
      }
      <Stack.Screen
        name="Home"
        component={Home}
      />
       <Stack.Screen
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  )
  }
  
  export default Navigations