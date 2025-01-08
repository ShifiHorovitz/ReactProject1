import React from 'react';
import { useTranslation } from 'react-i18next'; // מייבא את useTranslation

function Contact() {
  const { t } = useTranslation(); // מחזיר את פונקציית t

  return (
    <h1>{t('contact.title')}</h1> // משתמש במפתח home_welcome כדי להחזיר את התרגום המתאים
  );
}

export default Contact;


