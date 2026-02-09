'use client';

import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { alerts } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

export default function NotificationsPage() {
  const { t } = useTranslation();
  return (
    <div className="layout-content-container flex flex-col max-w-[1000px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={[{ name: t('dashboard'), href: '/' }, { name: t('notifications') }]} />
        <div className="flex flex-wrap items-end justify-between gap-4 text-balance">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight">{t('document_alerts')}</h1>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium">
              {t('notifications_desc')
                .replace('{critical}', t('critical_count').replace('{count}', '3'))
                .replace('{warnings}', t('warning_count').replace('{count}', '4'))}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-surface-dark text-sm font-bold text-[#69499c] dark:text-[#a586d3] hover:bg-gray-50 dark:hover:bg-[#362b45] transition-colors">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              {t('filter')}
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[20px]">done_all</span>
              {t('mark_all_as_read')}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 pb-10">
        {/* Critical Section */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 ring-4 ring-red-50 dark:ring-red-900/10">
              <span className="material-symbols-outlined text-[18px] fill">priority_high</span>
            </div>
            <h2 className="text-[#130d1c] dark:text-white text-lg font-bold">{t('critical_attention')}</h2>
          </div>
          {alerts.critical.map((alert, i) => (
            <AlertItem key={i} alert={alert} type="critical" />
          ))}
        </section>

        {/* Warnings Section */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 ring-4 ring-amber-50 dark:ring-amber-900/10">
              <span className="material-symbols-outlined text-[18px] fill">warning</span>
            </div>
            <h2 className="text-[#130d1c] dark:text-white text-lg font-bold">{t('warnings_expiring')}</h2>
          </div>
          {alerts.warnings.map((alert, i) => (
            <AlertItem key={i} alert={alert} type="warning" />
          ))}
        </section>
      </div>
    </div>
  );
}

function AlertItem({ alert, type }: { alert: any, type: 'critical' | 'warning' }) {
  const { t } = useTranslation();
  const isCritical = type === 'critical';
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-white dark:bg-surface-dark border-l-4 border-y border-r border-[#ece7f4] dark:border-[#3e3450] rounded-r-2xl shadow-sm gap-5 hover:shadow-md transition-all group",
      isCritical ? "border-l-red-500" : "border-l-amber-500"
    )}>
      <div className="flex items-center gap-5 w-full md:w-auto">
        <div className="relative">
          <div className={cn(
            "size-14 rounded-2xl flex items-center justify-center shrink-0 border",
            isCritical ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/30" : "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30"
          )}>
            <span className="material-symbols-outlined text-[28px]">{alert.icon}</span>
          </div>
          {isCritical && (
            <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-red-500 border-2 border-white dark:border-surface-dark flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[12px] font-bold">close</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[10px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded tracking-wider border border-gray-200 dark:border-gray-700">{alert.id}</span>
            <h3 className="font-bold text-[#130d1c] dark:text-white text-base">{t(alert.nameKey as any)}</h3>
          </div>
          <p className="text-sm text-[#69499c] dark:text-[#a586d3]">{t(alert.infoKey as any)}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full md:w-auto justify-between md:justify-end border-t sm:border-t-0 border-[#ece7f4] dark:border-[#3e3450] pt-4 sm:pt-0 mt-2 sm:mt-0">
        <div className="flex flex-col sm:items-end min-w-[100px]">
          <span className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border",
            isCritical ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800" : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
          )}>
            {t(alert.status as any)}
          </span>
          <p className={cn("text-xs font-medium mt-1", isCritical ? "text-[#69499c] dark:text-[#a586d3]" : "text-amber-600 dark:text-amber-400 font-bold")}>{t(alert.timeKey as any)}</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-white dark:bg-surface-dark hover:bg-gray-50 border border-[#d8cee8] dark:border-[#3e3450] text-[#69499c] dark:text-[#a586d3] rounded-xl text-sm font-bold transition-colors">
            {t('details')}
          </button>
          <button className={cn(
            "flex-1 sm:flex-none px-6 py-2 text-white rounded-xl text-sm font-bold transition-colors shadow-lg",
            isCritical ? "bg-red-600 hover:bg-red-700 shadow-red-600/20" : "bg-primary hover:bg-primary/90 shadow-primary/20"
          )}>
            {isCritical ? (alert.icon === 'badge' ? t('contact_driver') : t('renew_now')) : (alert.icon === 'picture_as_pdf' ? t('notify_driver') : t('renew'))}
          </button>
        </div>
      </div>
    </div>
  );
}
