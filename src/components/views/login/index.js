import React from 'react'
import { View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { object } from 'prop-types'
import shallow from 'zustand/shallow'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tailwind from 'tailwind-rn'
import { Input } from '../../forms'
import { Button } from '../../commons'
import { userStore, commonStore } from '../../../store'
import { login } from '../../../api/auth'
import { t, changeLanguage } from '../../../i18n'
import { styles } from './styles'

const Login = ({ navigation }) => {
  const [
    setData, language, setLanguage
  ] = userStore((state) => [state.setData, state.language, state.setLanguage], shallow)
  const { setState } = commonStore
  const { handleSubmit, errors, control } = useForm()

  const doChangeLanguage = (param) => {
    setLanguage(param)
    changeLanguage(param)
  }

  const doLogin = (val) => {
    const req = {
      email: val.username,
      password: val.password
    }
    login(req).then((response) => {
      setData({
        nama: val.username,
        token: response.data.token,
        email: 'email@yopmail.com'
      })
      setState({ token: response.data.token })
      navigation.navigate('Home')
    }).catch((e) => console.log('error', e))
  }

  return (
    <View style={{ padding: 10 }} key={language}>
      <Text style={styles.titleStyle}>
        Hello...
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => doChangeLanguage('id')}><Text style={{ marginRight: 20 }}>Indonesia </Text></TouchableOpacity>
        <TouchableOpacity onPress={() => doChangeLanguage('en')}><Text>English </Text></TouchableOpacity>
      </View>
      <Text>Login</Text>
      <Input
        name="username"
        rules={{ required: true }}
        control={control}
        placeholder={t('login.username')}
        error={errors.username}
        defaultValue="eve.holt@reqres.in"
      />
      <Input
        name="password"
        secureTextEntry
        rules={{ required: true }}
        control={control}
        placeholder={t('login.password')}
        error={errors.password}
        defaultValue="cityslicka"
      />
      <Button title={t('button.login')} style={styles.buttonStyle} onPress={handleSubmit(doLogin)} />
    </View>
  )
}

Login.propTypes = {
  navigation: object.isRequired
}

export default Login
