import create from 'zustand/vanilla'
import AsyncStorage from '@react-native-community/async-storage'
import { persist } from 'zustand/middleware'

const commonStore = create(persist(
  () => ({
    token: null
  }),
  {
    name: 'common-data',
    getStorage: () => AsyncStorage
  }
))

export default commonStore
