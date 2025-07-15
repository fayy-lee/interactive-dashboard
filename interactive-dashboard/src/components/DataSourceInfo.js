import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DataSourceInfo = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label={t('info_button_label')}
        title={t('info_button_label')}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 50,
          height: 50,
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        ?
      </button>
    );
  }

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: '2rem',
          maxWidth: 700,
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: '0 0 15px rgba(0,0,0,0.25)',
          whiteSpace: 'pre-wrap',
        }}
      >
        <h2 style={{ marginTop: 0 }}>{t('info_popup_title')}</h2>
        <p>{t('info_popup_text')}</p>
        <p>
          <a
            href="https://agriculture.canada.ca/en/food-business-and-industry/markets-and-trade/market-information/food-price-reporting/infohort-wholesale-price-reports"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2563eb', textDecoration: 'underline' }}
          >
            {t('info_popup_link_text')}
          </a>
        </p>
        <button
          onClick={() => setOpen(false)}
          style={{
            marginTop: '1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          {i18n.language === 'fr' ? 'Fermer' : 'Close'}
        </button>
      </div>
    </div>
  );
};

export default DataSourceInfo;
