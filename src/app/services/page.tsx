'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight">{t('maintenance_services')}</h1>
        <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium">
          {t('services_desc')}
        </p>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-12 rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col items-center justify-center text-center gap-4 text-balance">
        <span className="material-symbols-outlined text-primary text-6xl">build</span>
        <h2 className="text-xl font-bold text-[#130d1c] dark:text-white">{t('service_management')}</h2>
        <p className="text-[#69499c] dark:text-[#a586d3] text-sm max-w-sm">
          {t('service_mgmt_desc')}
        </p>
      </div>
    </div>
  );
}
