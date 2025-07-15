// ──────────  src/components/PriceLineChart.js  ──────────
import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useTranslation } from 'react-i18next';
import { tomatoPrices, veggiePrices } from '../data/prices';
import DataSourceInfo from './DataSourceInfo';

const currency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 2,
});

const veggieKeys = ['tomatoes', ...Object.keys(veggiePrices).filter((k) => k !== 'cucumbers')];

export default function PriceLineChart() {
  const { t } = useTranslation();
  const [selVeg, setSelVeg] = useState('tomatoes');

  const chartData =
    selVeg === 'tomatoes'
      ? tomatoPrices.map(({ month, price }) => ({ x: month.slice(0, 4), y: price }))
      : veggiePrices[selVeg].map(({ year, avg }) => ({ x: year.toString(), y: avg }));

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: '#ff6347', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {t('line_chart_title')}
        <DataSourceInfo />
      </h2>

      <label htmlFor="vegSel" style={{ fontWeight: '600' }}>
        {t('select_veggie')}:&nbsp;
        <select
          id="vegSel"
          value={selVeg}
          onChange={(e) => setSelVeg(e.target.value)}
          style={{ padding: '0.25rem', fontSize: '1rem' }}
        >
          {veggieKeys.map((v) => (
            <option key={v} value={v}>
              {t(`veggies.${v}`, v[0].toUpperCase() + v.slice(1))}
            </option>
          ))}
        </select>
      </label>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis tickFormatter={(v) => currency.format(v)} />
          <Tooltip formatter={(v) => currency.format(v)} labelFormatter={(l) => t('year_label', { year: l })} />
          <Line
            type="monotone"
            dataKey="y"
            name={t(`veggies.${selVeg}`, selVeg[0].toUpperCase() + selVeg.slice(1))}
            stroke="#ff6347"
            strokeWidth={2.5}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
