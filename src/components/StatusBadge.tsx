import React from 'react';
import { cn } from '@/lib/utils';

export type StatusType = 'Moving' | 'Stopped' | 'Service' | 'Passed' | 'Failed' | 'Warning' | 'Active' | 'Expired' | 'Expiring' | 'Valid' | 'Invited' | 'Manager' | 'Admin' | 'Viewer' | 'Driver';

interface StatusBadgeProps {
  status: StatusType;
  subtext?: string;
  className?: string;
}

const StatusBadge = ({ status, subtext, className }: StatusBadgeProps) => {
  const configs: Record<string, string> = {
    Moving: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    Stopped: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-700",
    Service: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    Passed: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    Failed: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
    Warning: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    Active: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    Expired: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
    Expiring: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    Valid: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    Invited: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    Admin: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    Manager: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    Viewer: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700",
    Driver: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  };

  const icons: Partial<Record<string, string>> = {
    Moving: "check_circle",
    Stopped: "local_parking",
    Service: "build",
    Passed: "check_circle",
    Failed: "cancel",
    Warning: "warning",
    Active: "check_circle",
    Expired: "close",
    Expiring: "warning",
    Valid: "check_circle",
    Admin: "admin_panel_settings",
    Manager: "manage_accounts",
    Viewer: "visibility",
    Driver: "directions_car",
  };

  return (
    <div className={cn("inline-flex h-7 items-center gap-1.5 rounded-full pl-2 pr-3 border text-[10px] font-bold uppercase tracking-wide whitespace-nowrap", configs[status] || configs['Viewer'], className)}>
      {icons[status] && <span className="material-symbols-outlined text-[16px] fill">{icons[status]}</span>}
      <div className="flex flex-col leading-none">
        <span>{status}</span>
        {subtext && <span className="text-[9px] opacity-70 font-mono">{subtext}</span>}
      </div>
    </div>
  );
};

export default StatusBadge;
