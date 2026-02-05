import React from 'react';

export default function GeneralSettingsPage() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450]">
      <h3 className="text-[#130d1c] dark:text-white font-bold text-lg mb-4 text-balance">General Workspace Settings</h3>
      <p className="text-[#69499c] dark:text-[#a586d3]">Configure basic information for your fleet management workspace.</p>
    </div>
  );
}
