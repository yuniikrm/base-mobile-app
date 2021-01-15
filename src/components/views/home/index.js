import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { object } from 'prop-types'
import { formatRelative, subDays } from 'date-fns'
import { id } from 'date-fns/locale'
import shallow from 'zustand/shallow'
import { Button } from '../../commons'
import { userStore, commonStore } from '../../../store'
import { t } from '../../../i18n'
import { styles } from './styles'
// import { getDetailUser } from '../../api/auth'

// const ImgAvatar = () => {
//   return (
//     profile.data?.avatar
//       ? <Image source={{ uri: profile.data.avatar }} style={{ width: 100, height: 100 }} />
//       : null
//   )
// }

const Home = ({ navigation }) => {
  const [dataUser, setDataUser] = userStore((state) => [state.data, state.setData], shallow)
  const { setState } = commonStore

  // useEffect(() => {
  //   // getDetailUser(4).then((res) => {
  //   //   setProfile(res.data)
  //   // })
  // }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {t('home.welcome')}
          {' '}
          {dataUser.email}
        </Text>
        <Text>
          Last online :
          {' '}
          {formatRelative(subDays(new Date(), 3), new Date(), { locale: id })}
        </Text>
      </View>

      <View>
        {/* <ImgAvatar /> */}
      </View>
      <Button
        title="go to profile"
        onPress={() => {
          navigation.navigate('Profile')
        }}
        style={styles.buttonStyle}
      />

      <Button
        title="test error"
        onPress={() => {
          throw new Error('testing ErrorBoundary')
        }}
        style={styles.buttonStyle}
      />

      <Button
        title="Logout"
        onPress={() => {
          setDataUser({})
          setState({ token: null })
        }}
        style={styles.buttonStyle}
      />
    </View>
  )
}

Home.propTypes = {
  navigation: object.isRequired
}

export default Home
