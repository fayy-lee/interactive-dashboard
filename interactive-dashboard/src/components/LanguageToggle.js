import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const toggleLang = () => {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      style={{
        cursor: 'pointer',
        padding: '0.4rem 1rem',
        borderRadius: '20px',
        border: 'none',
        fontWeight: '600',
        fontSize: '0.9rem',
        backgroundColor: '#ffffffcc',
        color: '#1f2937',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease-in-out',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = '#fff';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = '#ffffffcc';
      }}
    >
      {currentLang === 'en' ? 'FRANÇAIS' : 'ENGLISH'}
    </button>
  );
};

export default LanguageToggle;
