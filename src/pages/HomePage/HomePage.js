import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h2>đây là tiếng việt</h2>
      {t('hello')}
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('vn')}>vn</button>
    </div>
  );
}

export default HomePage;
