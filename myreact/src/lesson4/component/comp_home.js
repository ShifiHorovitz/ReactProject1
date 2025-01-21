import React from 'react';
import { useTranslation } from 'react-i18next'; // מייבא את useTranslation
import i18n from '../../i18n';



function Home() {
  const { t } = useTranslation(); // מחזיר את פונקציית t
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  
  
  return (
    <div>
    <h1>{t('home.title')}</h1>
    <button onClick={() => changeLanguage('he')}>hebrew</button>
    <button onClick={() => changeLanguage('en')}>english</button>
    </div>

    );
}

export default Home;


