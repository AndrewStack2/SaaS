'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

const Sidebar = () => {
  const pathname = usePathname();
  const [radarExpanded, setRadarExpanded] = useState(true);
  const { t } = useTranslation();

  const navItems = [
    { name: t('reports'), icon: 'description', href: '/reports' },
    { name: t('services'), icon: 'build', href: '/services' },
    { name: t('drivers'), icon: 'group', href: '/drivers' },
    { name: t('documents'), icon: 'folder', href: '/documents' },
  ];

  return (
    <aside className="w-64 flex-shrink-0 border-r border-[#d8cee8] dark:border-[#3e3450] bg-surface-light dark:bg-surface-dark hidden lg:flex flex-col z-20">
      <div className="flex flex-col h-full p-4 justify-between">
        <div className="flex flex-col gap-8">
          {/* Brand/User Section */}
          <div className="flex items-center gap-3 px-2">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqGRYAomv3hMnkg1YeFg96z4IQ3ctp9bTg1M-_JTStoV4oF2RDRhsZZOvirD9RSR8NbjPhBThf0FjXXLpnR25ifNojMLuWHzHeraFlqPECBW-TFmrvt1Glyiar0qVFkT1ltHpBrJ_hhCCwK5lYWwGDnDzeLdtg5o2jotsQUcLiAKe7DTbEZFRXl934nqp1BHOjOsJg9bkyPcyc1Nd-Nt_zAsnkaPpg0fJgE8_eTZuIH9EbrdVfyw54x5H64Xs-FrVBPbDTIlbQE")' }}
            />
            <div className="flex flex-col">
              <h1 className="text-[#130d1c] dark:text-white text-sm font-bold leading-tight">Spider Fleet</h1>
              <p className="text-[#69499c] dark:text-[#a586d3] text-xs font-medium">{t('fleet_manager')}</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {/* Radar Section */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setRadarExpanded(!radarExpanded)}
                className={cn(
                  "flex items-center justify-between w-full px-3 py-2.5 rounded-xl transition-all group",
                pathname === '/vehicles' || pathname === '/live-map' || pathname.startsWith('/vehicles/')
                    ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-white"
                    : "hover:bg-black/5 dark:hover:bg-white/5 text-[#69499c] dark:text-[#a586d3]"
                )}
              >
                <div className="flex items-center gap-3">
                <span className={cn("material-symbols-outlined", (pathname === '/vehicles' || pathname === '/live-map' || pathname.startsWith('/vehicles/')) && "fill")}>radar</span>
                  <span className="text-sm font-bold">{t('radar')}</span>
                </div>
                <span className={cn("material-symbols-outlined text-[18px] transition-transform", radarExpanded && "rotate-180")}>expand_more</span>
              </button>

              {radarExpanded && (
                <div className="flex flex-col ml-9 mt-1 gap-1">
                  <Link
                    href="/vehicles"
                    className={cn(
                      "flex items-center px-3 py-2 rounded-lg transition-all text-sm",
                      pathname === '/vehicles' || pathname.startsWith('/vehicles/')
                        ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-white font-semibold"
                        : "hover:bg-black/5 dark:hover:bg-white/5 text-[#69499c] dark:text-[#a586d3] font-medium"
                    )}
                  >
                    {t('vehicle_list')}
                  </Link>
                  <Link
                  href="/live-map"
                    className={cn(
                      "flex items-center px-3 py-2 rounded-lg transition-all text-sm",
                    pathname === '/live-map'
                        ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-white font-semibold"
                        : "hover:bg-black/5 dark:hover:bg-white/5 text-[#69499c] dark:text-[#a586d3] font-medium"
                    )}
                  >
                    {t('live_map')}
                  </Link>
                </div>
              )}
            </div>

            {/* Alerts Section */}
            <Link
              href="/notifications"
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group",
                pathname === '/notifications'
                  ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-white"
                  : "hover:bg-black/5 dark:hover:bg-white/5 text-[#69499c] dark:text-[#a586d3]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn("material-symbols-outlined", pathname === '/notifications' && "fill")}>notifications</span>
                <span className="text-sm font-medium">{t('alerts')}</span>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">7</span>
            </Link>

            {/* Other Sections */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all text-[#69499c] dark:text-[#a586d3]",
                  pathname === item.href && "bg-primary/10 dark:bg-primary/20 text-primary dark:text-white"
                )}
              >
                <span className={cn("material-symbols-outlined", pathname === item.href && "fill")}>{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2">
          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
              pathname.startsWith('/settings')
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "hover:bg-black/5 dark:hover:bg-white/5 text-[#69499c] dark:text-[#a586d3]"
            )}
          >
            <span className={cn("material-symbols-outlined", pathname.startsWith('/settings') && "fill")}>settings</span>
            <span className="text-sm font-medium">{t('settings')}</span>
          </Link>
          <div className="px-3 py-4 border-t border-[#d8cee8] dark:border-[#3e3450]">
            <p className="text-xs text-[#69499c] dark:text-[#a586d3]">v2.5.0 © 2024</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
