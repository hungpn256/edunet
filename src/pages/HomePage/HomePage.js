import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

function HomePage() {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h2>đây là tiếng việt</h2>
      <Trans i18nKey='hello'>abc</Trans>
      <button onClick={() => changeLanguage('en')}>aaa</button>
      <button onClick={() => changeLanguage('vn')}>aaa</button>
    </div>
  );
}

export default HomePage;
