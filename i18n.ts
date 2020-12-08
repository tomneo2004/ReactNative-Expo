import i18n from 'i18next';
import * as Localization from 'expo-localization';
import {initReactI18next} from 'react-i18next';

const resources = {
    fr: {
      translation:{
        foo: 'como telle fous',
        bar: 'chatouiller {{someValue}}',
      } 
    },
    en: {
      translation:{
        foo: 'Foo',
        bar: 'Bar {{someValue}}',
      }
    },
};

i18n
        .use(initReactI18next)
        .init({
          resources,
          lng: Localization.locale,
          fallbackLng: 'en',
          interpolation: {
            escapeValue: false,
          },
          cleanCode: true,
    });
  
export default i18n;