'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function DocumentsPage() {
  const { t } = useTranslation();

  const categories = [
    { key: 'vehicle_licenses', name: t('vehicle_licenses'), count: 42, icon: 'badge' },
    { key: 'insurance_policies', name: t('insurance_policies'), count: 12, icon: 'security' },
    { key: 'service_manuals', name: t('service_manuals'), count: 8, icon: 'menu_book' },
    { key: 'driver_contracts', name: t('driver_contracts'), count: 15, icon: 'assignment_ind' },
    { key: 'fleet_reports', name: t('fleet_reports'), count: 124, icon: 'description' },
    { key: 'safety_certificates', name: t('safety_certificates'), count: 31, icon: 'verified' },
  ];

  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6">
      <div className="flex flex-col gap-4 text-balance">
        <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight">{t('documents')}</h1>
        <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium">
          {t('documents_desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((folder) => (
          <div key={folder.key} className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{folder.icon}</span>
              </div>
              <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#3e3450]">more_vert</span>
            </div>
            <h3 className="text-lg font-bold text-[#130d1c] dark:text-white">{folder.name}</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1">{folder.count} {t('files')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
