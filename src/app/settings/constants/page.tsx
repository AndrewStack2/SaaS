'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function FleetConstantsPage() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
        <div className="flex items-start justify-between border-b border-[#ece7f4] dark:border-[#3e3450] pb-4">
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg text-balance">{t('operational_units')}</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1">{t('operational_units_desc')}</p>
          </div>
          <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#a586d3] text-3xl">straighten</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-balance">
          <ConstantSelect label={t('fuel_units')} desc={t('fuel_units_desc')} options={[t('liters'), t('gallons')]} />
          <ConstantSelect label={t('distance_units')} desc={t('distance_units_desc')} options={[t('kilometers'), t('miles')]} />
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
        <div className="flex items-start justify-between border-b border-[#ece7f4] dark:border-[#3e3450] pb-4">
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg text-balance">{t('financial_defaults')}</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1 text-balance">{t('financial_defaults_desc')}</p>
          </div>
          <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#a586d3] text-3xl text-balance">payments</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ConstantSelect label={t('default_currency')} options={[t('mxn'), t('usd'), t('eur')]} />
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-bold text-[#130d1c] dark:text-white">{t('avg_fuel_price')}</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-balance">
                <span className="text-[#69499c] dark:text-[#a586d3] text-sm">$</span>
              </div>
              <input className="w-full bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl pl-8 pr-4 py-2.5 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-[#69499c]/50" step="0.01" type="number" defaultValue="23.50" />
            </div>
            <p className="text-[11px] text-[#69499c] dark:text-[#a586d3]">{t('avg_fuel_price_desc')}</p>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/10 flex items-start gap-3">
        <span className="material-symbols-outlined text-primary">info</span>
        <div>
          <h4 className="text-sm font-bold text-[#130d1c] dark:text-white">{t('impact_historical_data')}</h4>
          <p className="text-xs text-[#69499c] dark:text-[#a586d3] mt-0.5 text-balance">{t('impact_historical_data_desc')}</p>
        </div>
      </div>
    </div>
  );
}

function ConstantSelect({ label, desc, options }: { label: string, desc?: string, options: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm font-bold text-[#130d1c] dark:text-white">{label}</label>
      <div className="relative">
        <select className="w-full appearance-none bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2.5 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
          {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#69499c] pointer-events-none">expand_more</span>
      </div>
      {desc && <p className="text-[11px] text-[#69499c] dark:text-[#a586d3]">{desc}</p>}
    </div>
  );
}
