import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t, i18n } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

export default HomePage;
