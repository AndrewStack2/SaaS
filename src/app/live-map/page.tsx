import React from 'react';

export default function LiveMapPage() {
  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight">Live Map</h1>
        <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium">
          Real-time tracking of all active vehicles in your fleet.
        </p>
      </div>

      <div className="flex-1 min-h-[500px] bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-50">
           {/* Placeholder for map background */}
           <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIdLxoAS3Yi8kDnplFHndkAEB3J4Cp1gue0rz0Xa1yZGUoRrTn3go0KEDL6vzZfmLTpU5sFdXpPKimaan_-6WnrjA_t9Hvd1RBbDDXwrwzuEKgae3zO1Vrc04704j_4ESuv3bIosrddHaVkVabyHX5PKccTvY7o7yV2OpxHDLIeRgzPRG26QU0-4_0tXK-k7MTpCCzTqJ-9akjHQA6-vtk-iQDc5LPBMVmV4eK7mFlNxYQn2LAquX82soCdTwAXCRwnweLrmTYvZo")' }}
          />
        </div>
        <div className="z-10 bg-white/90 dark:bg-surface-dark/90 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-primary/20 flex flex-col items-center gap-4 text-center">
          <span className="material-symbols-outlined text-primary text-6xl">map</span>
          <div>
            <h2 className="text-xl font-bold text-[#130d1c] dark:text-white">Live Tracking Interface</h2>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-2 max-w-xs">
              Interactive fleet monitoring is being initialized. Real-time GPS data will appear here.
            </p>
          </div>
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}
