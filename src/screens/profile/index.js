
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form'
import { Input, FormWrapper } from '@components/shared';
import { t } from '@i18n';

const Profile = ({ navigation  }) => {
  const { handleSubmit, errors, control } = useForm()
  const doSubmit = () => {
      console.log('do submit')
  }

    return (
            <FormWrapper style={{ padding: 20 }}>
                <React.Fragment>
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
            placeholder={"name"}
            error={errors.name}
            />
            
            <Input
            name="name"
            rules={{ required: true }}
            control={control}
            placeholder={"name"}
            error={errors.name}
            />
            
            <Input
            name="name"
            rules={{ required: true }}
            control={control}
            placeholder={"name"}
            error={errors.name}
            />
            
            <Input
            name="name"
            rules={{ required: true }}
            control={control}
            placeholder={"name"}
            error={errors.name}
            />
            
            <Input
            name="name"
            rules={{ required: true }}
            control={control}
            placeholder={"name"}
            error={errors.name}
            />
            
            <Input
            name="name"
            rules={{ required: true }}
            control={control}
            placeholder={"name"}
            error={errors.name}
            />

        
            <Input
            name="name"
            rules={{ required: true }}
            control={control}
            placeholder={"name"}
            error={errors.name}
            />
        </React.Fragment>
        </FormWrapper>    

    )
}

export default Profile