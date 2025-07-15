import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useTranslation } from 'react-i18next';
import { veggiePrices } from '../data/prices';

const currencyFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 2,
});

const years = [2021, 2022, 2023, 2024, 2025];

export default function PriceBarChart() {
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState(2025);

  const dataForYear = Object.entries(veggiePrices)
    .map(([veggie, data]) => {
      let yearData;
      if (Array.isArray(data)) {
        yearData = data.find((d) => d.year === selectedYear);
      } else {
        const ca = data.canada?.find((d) => d.year === selectedYear);
        const mx = data.mexico?.find((d) => d.year === selectedYear);
        yearData = ca && mx ? { avg: (ca.avg + mx.avg) / 2 } : ca || mx || null;
      }
      return {
        name: t(`veggies.${veggie}`, veggie[0].toUpperCase() + veggie.slice(1)),
        price: yearData ? yearData.avg : null,
      };
    })
    .filter((d) => d.price !== null);

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: '#4caf50' }}>{t('bar_chart_title')}</h2>

      <label htmlFor="year-select" style={{ fontWeight: '600' }}>
        {t('select_year')}:
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(+e.target.value)}
          style={{ marginLeft: 10, padding: '0.25rem', fontSize: '1rem' }}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataForYear} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(v) => currencyFormatter.format(v)} />
          <Tooltip formatter={(v) => currencyFormatter.format(v)} />
          <Bar dataKey="price" fill="#4caf50" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <p style={{ marginTop: '1rem', fontWeight: '600', color: '#555' }}>{t('currency_label')}</p>
    </div>
  );
}
