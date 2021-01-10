import React, { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from '@components/shared'
import { userStore } from '@store'
import { object } from 'prop-types'
import { t } from '@i18n'
import { formatRelative, subDays } from 'date-fns'
import { id } from 'date-fns/locale'
import { getDetailUser } from '@api/auth'
import { atom, useAtom } from 'jotai'

const profileDataAtom = atom({})

const ImgAvatar = () => {
  const [profile] = useAtom(profileDataAtom)
  return (
    profile.data?.avatar
      ? <Image source={{ uri: profile.data.avatar }} style={{ width: 100, height: 100 }} />
      : null
  )
}

const Home = ({ navigation }) => {
  const dataUser = userStore((state) => state.data.nama)
  const [, setProfile] = useAtom(profileDataAtom)

  useEffect(() => {
    getDetailUser(4).then((res) => {
      setProfile(res.data)
    })
  }, [])

  return (
    <View>
      <Text>
        Last online :
        {' '}
        {formatRelative(subDays(new Date(), 3), new Date(), { locale: id })}
      </Text>
      <Text>
        {t('home.welcome')}
        {' '}
        {dataUser}
      </Text>
      <View>
        <ImgAvatar />
      </View>
      <Button
        title="go to profile"
        onPress={() => {
          navigation.navigate('Profile')
        }}
      />

      <Button
        title="test error"
        onPress={() => {
          throw new Error('testing ErrorBoundary')
        }}
      />
    </View>
  )
}

Home.propTypes = {
  navigation: object.isRequired
}

export default Home
