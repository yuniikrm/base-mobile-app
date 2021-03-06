import create from 'zustand';
import AsyncStorage from '@react-native-community/async-storage';
import { persist } from 'zustand/middleware';

const userStore = create(persist(
  (set) => ({
    data: {},
    language: 'en',
    setData: (param) => set(() => ({ data: param })),
    setLanguage: (param) => set(() => ({ language: param })),
  }),
  {
    name: 'user-data',
    getStorage: () => AsyncStorage,
  },
));

export default userStore;
