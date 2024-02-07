import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en.json';
import rusTranslations from '../locales/rus.json'; 

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            rus: { translation: rusTranslations }
        },
        lng: 'en', 
        fallbackLng: 'rus', 
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
