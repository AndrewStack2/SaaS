'use client';

import React from 'react';
import { auditLogs } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

export default function AuditTrailPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[#130d1c] dark:text-white font-bold text-base flex items-center gap-2 text-balance">
            <span className="material-symbols-outlined text-primary">filter_alt</span>
            {t('filter_logs')}
          </h3>
          <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">{t('clear_filters')}</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FilterInput label={t('date_range')} type="date" />
          <FilterSelect label={t('specific_user')} options={[t('all_zones').replace('Zones', 'Users'), 'Sarah Johnson', 'Mike Chen', 'System Auto']} />
          <FilterSelect label={t('action_type')} options={['All Actions', t('created'), t('updated'), t('deleted')]} />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3]">{t('search')}</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2 text-[#69499c] pointer-events-none text-lg">search</span>
              <input className="w-full bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl pl-10 pr-4 py-2 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder={t('search_audit_placeholder')} type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-[#ece7f4] dark:border-[#3e3450] overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-light dark:bg-[#171022] border-b border-[#d8cee8] dark:border-[#3e3450]">
                <th className="py-3 px-6 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('timestamp')}</th>
                <th className="py-3 px-6 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('user')}</th>
                <th className="py-3 px-6 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('action_type')}</th>
                <th className="py-3 px-6 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider w-1/3">{t('overview')}</th>
                <th className="py-3 px-6 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider text-right">{t('ip_address')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ece7f4] dark:divide-[#3e3450]">
              {auditLogs.map((log, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm">
                  <td className="py-4 px-6 font-medium whitespace-nowrap text-[#130d1c] dark:text-white">
                    {log.timestamp}<br/><span className="text-xs text-[#69499c] dark:text-[#a586d3] font-normal">{log.time}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">{log.initials}</div>
                      <span className="font-medium text-[#130d1c] dark:text-white">{log.user}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold",
                      log.action === 'Created' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" :
                      log.action === 'Deleted' ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" :
                      "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                    )}>
                      <span className="material-symbols-outlined text-[14px]">{log.action === 'Created' ? 'add_circle' : log.action === 'Deleted' ? 'delete' : 'edit'}</span>
                      {log.action === 'Created' ? t('created') : log.action === 'Deleted' ? t('deleted') : t('updated')}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#130d1c] dark:text-white">
                    {t(log.descriptionKey as any)}
                  </td>
                  <td className="py-4 px-6 text-[#69499c] dark:text-[#a586d3] text-right font-mono">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-[#ece7f4] dark:border-[#3e3450] p-4 flex items-center justify-between">
          <span className="text-xs text-[#69499c] dark:text-[#a586d3]">{t('showing')} 1-5 {t('of')} 1,248 {t('results')}</span>
          <div className="flex gap-2">
            <button className="size-8 flex items-center justify-center rounded-lg border border-[#d8cee8] dark:border-[#3e3450] text-[#69499c] dark:text-[#a586d3] hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="size-8 flex items-center justify-center rounded-lg border border-[#d8cee8] dark:border-[#3e3450] text-[#69499c] dark:text-[#a586d3] hover:bg-gray-50 dark:hover:bg-white/5">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterInput({ label, type }: { label: string, type: string }) {
  return (
    <div className="flex flex-col gap-1.5 text-balance">
      <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3]">{label}</label>
      <input className="w-full bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none" type={type} />
    </div>
  );
}

function FilterSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="flex flex-col gap-1.5 text-balance">
      <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3]">{label}</label>
      <div className="relative">
        <select className="w-full appearance-none bg-background-light dark:bg-[#171022] border border-[#d8cee8] dark:border-[#3e3450] rounded-xl px-4 py-2 text-sm text-[#130d1c] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
          {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <span className="material-symbols-outlined absolute right-3 top-2 text-[#69499c] pointer-events-none text-lg">expand_more</span>
      </div>
    </div>
  );
}
