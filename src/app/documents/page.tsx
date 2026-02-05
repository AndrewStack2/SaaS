import React from 'react';

export default function DocumentsPage() {
  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight">Documents</h1>
        <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium">
          Manage central documentation, templates, and fleet-wide records.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Vehicle Licenses', count: 42, icon: 'badge' },
          { name: 'Insurance Policies', count: 12, icon: 'security' },
          { name: 'Service Manuals', count: 8, icon: 'menu_book' },
          { name: 'Driver Contracts', count: 15, icon: 'assignment_ind' },
          { name: 'Fleet Reports', count: 124, icon: 'description' },
          { name: 'Safety Certificates', count: 31, icon: 'verified' },
        ].map((folder) => (
          <div key={folder.name} className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{folder.icon}</span>
              </div>
              <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#3e3450]">more_vert</span>
            </div>
            <h3 className="text-lg font-bold text-[#130d1c] dark:text-white">{folder.name}</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1">{folder.count} files</p>
          </div>
        ))}
      </div>
    </div>
  );
}
