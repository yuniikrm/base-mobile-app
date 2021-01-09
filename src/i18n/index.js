import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './locales/en.json';
import id from './locales/id.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  id
};

const currentLocale = I18n.currentLocale();
I18n.locale = currentLocale

export function changeLanguage(param) {
  console.log('do change language')
  return I18n.locale = param
}

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('id') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function t(name, params = {}) {
  return I18n.t(name, params);
};

export default I18n;