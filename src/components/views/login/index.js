import React from 'react'
import { View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { object } from 'prop-types'
import shallow from 'zustand/shallow'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useMutation } from 'react-query'
import { Input } from '../../forms'
import { Button } from '../../commons'
import { userStore, commonStore } from '../../../store'
import { login } from '../../../api/auth'
import { t, changeLanguage } from '../../../i18n'
import { styles } from './styles'

const Login = ({ navigation }) => {
  const [setData, language, setLanguage
  ] = userStore((state) => [
    state.setData,
    state.language,
    state.setLanguage], shallow)
  const { setState } = commonStore
  const { handleSubmit, errors, control } = useForm()

  const useLogin = useMutation((body) => login(body), {
    onSuccess: (response, variables) => {
      const { token } = response.data
      setState({ token })
      setData({
        token,
        ...variables
      })
    }
  })

  const doChangeLanguage = (param) => {
    setLanguage(param)
    changeLanguage(param)
  }

  const doLogin = (val) => {
    const req = {
      email: val.username,
      password: val.password
    }
    useLogin.mutate(req)
  }

  return (
    <View style={styles.container} key={language}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Welcome !
        </Text>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => doChangeLanguage('id')}><Text>Indonesia </Text></TouchableOpacity>
          <TouchableOpacity onPress={() => doChangeLanguage('en')}><Text>English </Text></TouchableOpacity>
        </View>
      </View>
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
      <Button
        title={t('button.login')}
        style={styles.buttonStyle}
        loading={useLogin.isLoading}
        onPress={handleSubmit(doLogin)}
      />
    </View>
  )
}

Login.propTypes = {
  navigation: object.isRequired
}

export default Login
