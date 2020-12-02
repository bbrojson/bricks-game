import i18n from 'i18next';
import {
  initReactI18next,
} from 'react-i18next';
import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
};

// * there is no reject on loading failed...
// * the backend itself does already retries...
// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: '.',
  });

export default i18n;
