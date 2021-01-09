import React from 'react'
import { object } from 'prop-types'
import { useForm } from 'react-hook-form'
import { Input, FormWrapper } from '@components/shared'
import { t } from '@i18n'

const Profile = ({ navigation }) => {
  const { errors, control } = useForm()

  return (
    <FormWrapper style={{ padding: 20 }}>
      <>
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

        <Input
          name="name"
          rules={{ required: true }}
          control={control}
          placeholder="name"
          error={errors.name}
        />

        <Input
          name="name"
          rules={{ required: true }}
          control={control}
          placeholder="name"
          error={errors.name}
        />

        <Input
          name="name"
          rules={{ required: true }}
          control={control}
          placeholder="name"
          error={errors.name}
        />

        <Input
          name="name"
          rules={{ required: true }}
          control={control}
          placeholder="name"
          error={errors.name}
        />

        <Input
          name="name"
          rules={{ required: true }}
          control={control}
          placeholder="name"
          error={errors.name}
        />

        <Input
          name="name"
          rules={{ required: true }}
          control={control}
          placeholder="name"
          error={errors.name}
        />

        <Input
          name="name"
          rules={{ required: true }}
          control={control}
          placeholder="name"
          error={errors.name}
        />
      </>
    </FormWrapper>

  )
}

Profile.propTypes = {
  navigation: object.isRequired
}

export default Profile
