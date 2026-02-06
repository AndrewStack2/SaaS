import React from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon: string;
  progress?: number;
  colorClass?: string;
  className?: string;
}

const StatsCard = ({ label, value, subtext, icon, progress, colorClass, className }: StatsCardProps) => {
  return (
    <div className={cn("bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col justify-between h-32 relative overflow-hidden", className)}>
      <div className={cn("absolute -right-4 -bottom-4 opacity-5 dark:opacity-5", colorClass || "text-primary")}>
        <span className="material-symbols-outlined text-[80px]">{icon}</span>
      </div>
      <div className="flex items-center gap-2 text-[#69499c] dark:text-[#a586d3]">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
      </div>
      <div>
        <p className="text-2xl font-black text-[#130d1c] dark:text-white leading-tight">{value}</p>
        {subtext && <p className={cn("text-xs font-medium", colorClass ? colorClass : "text-[#69499c] dark:text-[#a586d3]")}>{subtext}</p>}
      </div>
      {progress !== undefined && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
          <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
