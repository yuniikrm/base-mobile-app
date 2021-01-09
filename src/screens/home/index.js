import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '@components/shared'
import { userStore } from '@store'
import { object } from 'prop-types'
import { t } from '@i18n'

const Home = ({ navigation }) => {
  const dataUser = userStore((state) => state.data.nama)
  return (
    <View>
      <Text>
        {t('home.welcome')}
        {' '}
        {dataUser}
      </Text>
      <Button
        title="go to profile"
        onPress={() => {
          console.log('redirecttt', navigation)
          navigation.navigate('Profile')
        }}
      />
    </View>
  )
}

Home.propTypes = {
  navigation: object.isRequired
}

export default Home
