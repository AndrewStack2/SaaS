'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

export default function AlertConfigurationPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-[#130d1c] dark:text-white text-balance">{t('alert_configuration')}</h2>
        <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium max-w-2xl">
          {t('alert_configuration_desc')}
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-[#ece7f4] dark:border-[#3e3450]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined fill">notifications_active</span>
            </div>
            <div>
              <h3 className="font-bold text-[#130d1c] dark:text-white">{t('global_notifications')}</h3>
              <p className="text-sm text-[#69499c] dark:text-[#a586d3]">{t('global_notifications_desc')}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Toggle label={t('email')} defaultChecked />
            <Toggle label={t('push')} defaultChecked />
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white dark:bg-surface-dark shadow-sm border border-[#ece7f4] dark:border-[#3e3450] divide-y divide-[#ece7f4] dark:divide-[#3e3450]">
        <AlertCategory
          title={t('insurance_policies')}
          desc={t('insurance_policies_desc')}
          icon="security"
          iconColor="blue"
          warningDays={30}
          criticalDays={7}
        />
        <AlertCategory
          title={t('vehicle_verifications')}
          desc={t('vehicle_verifications_desc')}
          icon="verified"
          iconColor="emerald"
          warningDays={15}
          criticalDays={3}
        />
        <AlertCategory
          title={t('driver_licenses')}
          desc={t('driver_licenses_desc')}
          icon="badge"
          iconColor="purple"
          warningDays={45}
          criticalDays={10}
        />
      </div>
    </div>
  );
}

function Toggle({ label, defaultChecked }: { label: string, defaultChecked?: boolean }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
        <input defaultChecked={defaultChecked} className="peer absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary transition-all duration-300" type="checkbox" />
        <label className="block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer peer-checked:bg-primary transition-colors duration-300"></label>
      </div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{label}</span>
    </label>
  );
}

function AlertCategory({ title, desc, icon, iconColor, warningDays, criticalDays }: any) {
  const colorMap: any = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  };
  return (
    <div className="p-6 md:p-8 flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <div className={cn("size-10 rounded-lg flex items-center justify-center shrink-0", colorMap[iconColor])}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-[#130d1c] dark:text-white">{title}</h3>
          <p className="text-sm text-[#69499c] dark:text-[#a586d3]">{desc}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input defaultChecked className="sr-only peer" type="checkbox" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-14">
        <ThresholdInput label="Warning Alert" icon="warning" days={warningDays} type="warning" />
        <ThresholdInput label="Critical Alert" icon="priority_high" days={criticalDays} type="critical" />
      </div>
    </div>
  );
}

function ThresholdInput({ label, icon, days, type }: any) {
  const { t } = useTranslation();
  const isWarning = type === 'warning';
  return (
    <div className={cn(
      "flex flex-col gap-3 p-4 rounded-xl border",
      isWarning ? "bg-amber-50/50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30" : "bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30"
    )}>
      <div className={cn("flex items-center gap-2 font-bold text-sm uppercase tracking-wide", isWarning ? "text-amber-700 dark:text-amber-400" : "text-red-700 dark:text-red-400")}>
        <span className="material-symbols-outlined text-[18px] fill">{icon}</span>
        {label === 'Warning Alert' ? t('warning_alert') : t('critical_alert')}
      </div>
      <div className="flex items-center gap-3 mt-1">
        <div className="relative flex-1">
          <input className={cn(
            "w-full pl-3 pr-12 py-2 rounded-lg bg-white dark:bg-surface-dark font-bold text-gray-800 dark:text-white border focus:ring-2",
            isWarning ? "border-amber-200 dark:border-amber-800 focus:ring-amber-500/50 focus:border-amber-500" : "border-red-200 dark:border-red-800 focus:ring-red-500/50 focus:border-red-500"
          )} type="number" defaultValue={days} />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400">{t('days')}</span>
        </div>
        <span className="text-sm font-medium text-gray-500">{t('before')}</span>
      </div>
    </div>
  );
}
