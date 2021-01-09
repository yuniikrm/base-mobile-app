
import React from 'react';
import { View, Text } from 'react-native';
import { useForm } from 'react-hook-form'
import { Button, Input } from '@components/shared';
import shallow from 'zustand/shallow'
import { userStore } from '@store'
import { t, changeLanguage } from '@i18n';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({ navigation  }) => {
  const [setData, language, setLanguage] = userStore(state => [state.setData, state.language, state.setLanguage], shallow)
  const { handleSubmit, errors, control } = useForm()

  const doChangeLanguage = (param) => {
    setLanguage(param)
    changeLanguage(param)
  }

  const doLogin = (val) => {
    if (val.username === 'yunilucu' && val.password === '111') {
      setData({
        nama: val.username,
        token: '123563737373',
        email: 'email@yopmail.com'
      })
      navigation.navigate('Home')
    }
  }

    return (
    <View style={{ padding: 10 }} key={language}>
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
        />
        <Input
          name="password"
          secureTextEntry
          rules={{ required: true }}
          control={control}
          placeholder={t('login.password')}
          error={errors.password}
        />
        <Button title={t('button.login')} onPress={handleSubmit(doLogin)} />
    </View>
    )
}

export default Login