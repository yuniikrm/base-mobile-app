import create from 'zustand'
import AsyncStorage from '@react-native-community/async-storage'
import { persist } from "zustand/middleware"

const userStore = create(persist(
  set => ({
    data: {},
    language: 'en',
    setData: (param) => set(state => ({ data: param })),
    setLanguage: (param) => set(state => ({language: param}))
  }),
  {
    name: "user-data",
    storage: AsyncStorage
  }
 ))

export default userStore