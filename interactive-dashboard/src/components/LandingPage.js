import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '0 2rem',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
        {t('landing_title')}
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem', textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
        {t('landing_description')}
      </p>
      <button
        onClick={goToDashboard}
        style={{
          padding: '1rem 3rem',
          fontSize: '1.25rem',
          backgroundColor: '#ffffffcc',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          color: '#374151',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(255, 255, 255, 0.4)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#ffffffcc';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.4)';
        }}
      >
        {t('landing_button')}
      </button>
    </div>
  );
};

export default LandingPage;
