import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import PriceLineChart from './PriceLineChart';
import PriceBarChart from './PriceBarChart';
import DataSourceInfo from './DataSourceInfo';

const Dashboard = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ACB6E5 0%, #E6EBF8 100%)',
        padding: '2rem 3rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#1f2937',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '1rem',
          borderBottom: '1px solid #d1d5db',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div
          style={{
            fontWeight: '700',
            fontSize: '1.8rem',
            color: '#2563eb',
            letterSpacing: '1px',
          }}
        >
          {t('app_title')} 🥦
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
            {t('dashboard_title')}
          </Link>
          <LanguageToggle />
        </div>
      </nav>

      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontWeight: '700', fontSize: '2rem', letterSpacing: '1px' }}>
          {t('dashboard_title')}
        </h1>
      </header>

      <main
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          flexGrow: 1,
        }}
      >
        <section
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {loading ? <p>{t('loading_line_chart')}</p> : <PriceLineChart />}
        </section>

        <section
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {loading ? <p>{t('loading_bar_chart')}</p> : <PriceBarChart />}
        </section>
      </main>

      <DataSourceInfo />

      <footer
        style={{
          marginTop: '3rem',
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '0.9rem',
        }}
      >
        &copy; 2025 {t('app_title')} — VegDash. {t('footer_rights')}
      </footer>
    </div>
  );
};

export default Dashboard;
