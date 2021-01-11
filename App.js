/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Provider } from 'jotai'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import Navigations from '@navigations'
import { userStore, commonStore } from '@store'
import shallow from 'zustand/shallow'
import * as Sentry from '@sentry/react-native'
import ErrorBoundary from 'react-native-error-boundary'
import { FallbackErrorBoundary } from '@components/shared'
import { changeLanguage } from '@i18n'
import { SENTRY_DSN } from '@config'

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
    <Provider>
      <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
        <NavigationContainer>
          <Navigations />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  )
}

export default App
