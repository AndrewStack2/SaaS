'use client';

import React from 'react';
import { useLanguage, Language } from '@/lib/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function GeneralSettingsPage() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      {/* Workspace Branding Section */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
        <div className="flex items-start justify-between border-b border-[#ece7f4] dark:border-[#3e3450] pb-4">
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg">{t('workspace_branding')}</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1">{t('workspace_branding_desc')}</p>
          </div>
          <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#a586d3] text-3xl">palette</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('workspace_logo')}</label>
            <div className="relative group">
              <div className="size-24 rounded-2xl bg-primary/5 border-2 border-dashed border-[#d8cee8] dark:border-[#3e3450] flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-colors cursor-pointer">
                <div
                  className="size-20 rounded-xl bg-center bg-no-repeat bg-cover shadow-sm"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqGRYAomv3hMnkg1YeFg96z4IQ3ctp9bTg1M-_JTStoV4oF2RDRhsZZOvirD9RSR8NbjPhBThf0FjXXLpnR25ifNojMLuWHzHeraFlqPECBW-TFmrvt1Glyiar0qVFkT1ltHpBrJ_hhCCwK5lYWwGDnDzeLdtg5o2jotsQUcLiAKe7DTbEZFRXl934nqp1BHOjOsJg9bkyPcyc1Nd-Nt_zAsnkaPpg0fJgE8_eTZuIH9EbrdVfyw54x5H64Xs-FrVBPbDTIlbQE")' }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="material-symbols-outlined text-white">upload</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-[#69499c] dark:text-[#a586d3] max-w-[120px] leading-tight">Recommended: Square PNG, min 400x400px.</p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full font-display">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('workspace_name')}</label>
              <input
                type="text"
                defaultValue="Spider Fleet"
                className="w-full bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2.5 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('workspace_url')}</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="spiderfleet"
                  className="w-full bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl pl-4 pr-32 py-2.5 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#69499c] dark:text-[#a586d3] text-xs font-medium">.spiderfleet.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Details Section */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
        <div className="flex items-start justify-between border-b border-[#ece7f4] dark:border-[#3e3450] pb-4">
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg">{t('organization_details')}</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1 text-balance">{t('organization_details_desc')}</p>
          </div>
          <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#a586d3] text-3xl">corporate_fare</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-display">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('organization_id')}</label>
            <input
              type="text"
              readOnly
              defaultValue="ORG-992834-X"
              className="w-full bg-gray-50 dark:bg-white/5 border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2.5 text-sm text-[#69499c] dark:text-[#a586d3] cursor-not-allowed outline-none font-mono"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('primary_contact_email')}</label>
            <input
              type="email"
              defaultValue="admin@spiderfleet.com"
              className="w-full bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2.5 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Regional Settings Section */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
        <div className="flex items-start justify-between border-b border-[#ece7f4] dark:border-[#3e3450] pb-4">
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg">{t('regional_settings')}</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1 text-balance">{t('regional_settings_desc')}</p>
          </div>
          <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#a586d3] text-3xl">public</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-display">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('timezone')}</label>
            <div className="relative">
              <select className="w-full appearance-none bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2.5 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                <option value="America/Mexico_City">(GMT-06:00) Mexico City</option>
                <option value="America/New_York">(GMT-05:00) Eastern Time</option>
                <option value="Europe/London">(GMT+00:00) London</option>
                <option value="UTC">Universal Coordinated Time (UTC)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#69499c] pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="language-select" className="text-sm font-bold text-[#130d1c] dark:text-white">{t('default_language')}</label>
            <div className="relative">
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="w-full appearance-none bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2.5 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              >
                <option value="es">Español (Mexico)</option>
                <option value="en">English (US)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#69499c] pointer-events-none">expand_more</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/10 flex items-start gap-3">
        <span className="material-symbols-outlined text-primary">info</span>
        <div>
          <h4 className="text-sm font-bold text-[#130d1c] dark:text-white">{t('workspace_visibility')}</h4>
          <p className="text-xs text-[#69499c] dark:text-[#a586d3] mt-0.5 text-balance">{t('workspace_visibility_desc')}</p>
        </div>
      </div>
    </div>
  );
}
