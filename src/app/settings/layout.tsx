'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSaving, setIsSaving] = useState(false);
  const { t } = useTranslation();

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
  };

  const tabs = [
    { name: t('general'), href: '/settings' },
    { name: t('user_management'), href: '/settings/users' },
    { name: t('notifications'), href: '/settings/notifications' },
    { name: t('audit_trail'), href: '/settings/audit' },
    { name: t('fleet_constants'), href: '/settings/constants' },
  ];

  const currentTab = tabs.find(t => t.href === pathname) || tabs[0];

  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6">
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={[{ name: t('settings'), href: '/settings' }, { name: currentTab.name }]} />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-[#130d1c] dark:text-white text-3xl font-black tracking-tight">{t('settings')}</h1>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1">Manage your organization preferences and platform configuration.</p>
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 min-w-[140px]"
          >
            {isSaving ? 'Saving...' : t('save_changes')}
          </button>
        </div>
      </div>

      <div className="border-b border-[#d8cee8] dark:border-[#3e3450] mt-2">
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "pb-3 text-sm transition-colors whitespace-nowrap border-b-2",
                pathname === tab.href
                  ? "border-primary text-[#130d1c] dark:text-white font-bold"
                  : "border-transparent text-[#69499c] dark:text-[#a586d3] hover:text-primary font-medium"
              )}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
}
