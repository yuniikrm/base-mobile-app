/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import shallow from 'zustand/shallow'
import * as Sentry from '@sentry/react-native'
import ErrorBoundary from 'react-native-error-boundary'
import { changeLanguage } from './src/i18n'
import { SENTRY_DSN } from './src/config'
import { FallbackErrorBoundary } from './src/components/commons'
import { userStore, commonStore } from './src/store'
import Navigations from './src/navigations'

const App = () => {
  Sentry.init({
    dsn: SENTRY_DSN
  })
  const [data, language] = userStore((state) => [state.data, state.language], shallow)
  const { setState } = commonStore

  changeLanguage(language)
  if (data.token) {
    setState({ token: data.token })
  }

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 0)
  }, [])

  return (
    <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </ErrorBoundary>
  )
}

export default App
