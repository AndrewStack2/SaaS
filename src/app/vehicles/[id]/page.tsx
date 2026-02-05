'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import StatusBadge from '@/components/StatusBadge';
import StatsCard from '@/components/StatsCard';
import { vehicles, inspections, serviceHistory, documents, activityLogs } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === id) || vehicles[0];
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', icon: 'dashboard' },
    { name: 'Inspections', icon: 'fact_check' },
    { name: 'Services', icon: 'car_repair' },
    { name: 'Documentation', icon: 'folder_open' },
    { name: 'Verifications', icon: 'verified' },
    { name: 'Activity', icon: 'history' },
  ];

  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6">
      {/* Header section */}
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={[
          { name: 'Radar', href: '/vehicles' },
          { name: 'Vehicle List', href: '/vehicles' },
          { name: `${vehicle.name} - ${vehicle.id}` }
        ]} />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight">{vehicle.name} - {vehicle.id}</h1>
              <StatusBadge status={vehicle.status} />
            </div>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">sync</span>
              Last updated: {vehicle.lastUpdate} via GPS
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-white dark:bg-surface-dark border border-[#d8cee8] dark:border-[#3e3450] text-[#130d1c] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#362b45] transition-colors">
              <span className="material-symbols-outlined text-[18px]">share</span>
              Share
            </button>
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">edit</span>
              Edit Vehicle
            </button>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="border-b border-[#d8cee8] dark:border-[#3e3450]">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={cn(
                "flex items-center gap-2 border-b-[3px] pb-3 px-1 transition-all whitespace-nowrap",
                activeTab === tab.name
                  ? "border-primary text-[#130d1c] dark:text-white"
                  : "border-transparent text-[#69499c] dark:text-[#a586d3] hover:text-primary"
              )}
            >
              <span className={cn("material-symbols-outlined text-[20px]", activeTab === tab.name && "fill")}>{tab.icon}</span>
              <span className="text-sm font-bold">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content section based on active tab */}
      <div className="flex flex-col gap-8 pb-10">
        {activeTab === 'Overview' && <OverviewTab vehicle={vehicle} />}
        {activeTab === 'Inspections' && <InspectionsTab />}
        {activeTab === 'Services' && <ServicesTab />}
        {activeTab === 'Documentation' && <DocumentationTab />}
        {activeTab === 'Verifications' && <VerificationsTab />}
        {activeTab === 'Activity' && <ActivityTab />}
      </div>
    </div>
  );
}

function OverviewTab({ vehicle }: { vehicle: any }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 flex flex-col gap-6">
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <span className="material-symbols-outlined text-4xl text-[#d8cee8] dark:text-[#3e3450]">directions_car</span>
          </div>
          <div className="flex flex-col gap-1 z-10">
            <h3 className="text-[#69499c] dark:text-[#a586d3] text-xs font-bold uppercase tracking-wider">Vehicle Model</h3>
            <p className="text-xl font-bold text-[#130d1c] dark:text-white">{vehicle.name}</p>
            <p className="text-sm text-[#69499c] dark:text-[#a586d3]">{vehicle.type} • {vehicle.color}</p>
          </div>
          <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] dark:from-[#374151] dark:to-[#1f2937] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPE-mA2i6HQdrIF_7ECrB3IU6230SKPs53F_xczfQuV2N8WRJN-G2AU8pnStD_Fo4Bt3mwih3kO5o98FMK-X1o0ISI3uqIz_F_xbw5ozPpjUcLoGrW4s5k-uoin03k6Y6mu5QtE7elHmUb3BWzijask41b4Aeo0TeIENbRIKeYvLNLlq1Yk2WC-I7kvV4h1IszdCAY2F97lOmNxAN_fES15G8nTVq7t1U9qcqd2DpC8JLu3bAUaphbzX2Mp-LG_AVx3GNhC71ugLI')" }} />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-4 text-white font-mono text-lg font-bold tracking-widest drop-shadow-md">{vehicle.id}</div>
          </div>
          <div className="flex items-center gap-4 pt-2 border-t border-[#ece7f4] dark:border-[#3e3450]">
            {vehicle.driver.avatar && (
              <div className="size-12 rounded-full bg-cover bg-center border-2 border-white dark:border-surface-dark shadow-sm" style={{ backgroundImage: `url(${vehicle.driver.avatar})` }} />
            )}
            <div className="flex flex-col">
              <p className="text-xs text-[#69499c] dark:text-[#a586d3] font-bold uppercase">Assigned Driver</p>
              <p className="text-sm font-bold text-[#130d1c] dark:text-white">{vehicle.driver.name}</p>
              {vehicle.driver.rating && (
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-yellow-400 text-[14px] fill">star</span>
                  <span className="text-xs font-medium text-[#130d1c] dark:text-white">{vehicle.driver.rating} Rating</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#130d1c] dark:text-white font-bold text-base">Key Documents</h3>
            <button className="text-primary text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {documents.slice(0, 2).map((doc) => (
              <div key={doc.name} className="flex flex-col gap-2 p-3 rounded-xl bg-[#f9f8fc] dark:bg-white/5 border border-transparent hover:border-primary/30 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div className={cn("size-8 rounded-lg flex items-center justify-center", doc.color === 'red' ? "bg-red-100 text-red-600" : doc.color === 'indigo' ? "bg-indigo-100 text-indigo-600" : "bg-blue-100 text-blue-600")}>
                    <span className="material-symbols-outlined text-[18px]">{doc.icon}</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 text-[16px] group-hover:text-primary">download</span>
                </div>
                <p className="text-xs font-medium text-[#130d1c] dark:text-white truncate">{doc.name}.pdf</p>
                <p className="text-[10px] text-[#69499c] dark:text-[#a586d3]">Exp: Dec 2024</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard label="Fuel Level" value={`${vehicle.fuel}%`} subtext="~340 km range" icon="local_gas_station" progress={vehicle.fuel} />
          <StatsCard label="Odometer" value={vehicle.odometer.toLocaleString()} subtext="km total" icon="speed" />
          <StatsCard label="Battery" value={vehicle.battery} subtext="Good Condition" icon="battery_charging_full" colorClass="text-emerald-500" />
          <StatsCard label="Efficiency" value={vehicle.efficiency} subtext="km/l avg" icon="eco" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col">
            <div className="p-5 border-b border-[#ece7f4] dark:border-[#3e3450] flex justify-between items-center">
              <h3 className="text-[#130d1c] dark:text-white font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">health_and_safety</span>
                Vehicle Health
              </h3>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-md">{vehicle.health}/100</span>
            </div>
            <div className="p-2 flex flex-col">
              <HealthItem title="Engine Status" sub="Running smoothly" status="OK" />
              <HealthItem title="Braking System" sub="Pads at 70%" status="OK" />
              <HealthItem title="Tire Pressure" sub="Check front-left" status="Check" warning />
            </div>
            <div className="p-4 mt-auto">
              <button className="w-full py-2 rounded-lg border border-[#d8cee8] dark:border-[#3e3450] text-[#69499c] dark:text-[#a586d3] text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#362b45] transition-colors">
                Full Diagnostic
              </button>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col overflow-hidden h-full">
            <div className="p-5 border-b border-[#ece7f4] dark:border-[#3e3450] flex justify-between items-center z-10 bg-surface-light dark:bg-surface-dark">
              <h3 className="text-[#130d1c] dark:text-white font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">near_me</span>
                Live Location
              </h3>
              <button className="text-primary hover:text-primary/80">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>
            <div className="flex-1 relative bg-gray-100 dark:bg-gray-800 min-h-[250px]">
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIdLxoAS3Yi8kDnplFHndkAEB3J4Cp1gue0rz0Xa1yZGUoRrTn3go0KEDL6vzZfmLTpU5sFdXpPKimaan_-6WnrjA_t9Hvd1RBbDDXwrwzuEKgae3zO1Vrc04704j_4ESuv3bIosrddHaVkVabyHX5PKccTvY7o7yV2OpxHDLIeRgzPRG26QU0-4_0tXK-k7MTpCCzTqJ-9akjHQA6-vtk-iQDc5LPBMVmV4eK7mFlNxYQn2LAquX82soCdTwAXCRwnweLrmTYvZo')" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-white/90 dark:bg-surface-dark/90 px-2 py-1 rounded shadow-md backdrop-blur-sm mb-1">
                  <p className="text-[10px] font-bold text-[#130d1c] dark:text-white">{vehicle.location.address}</p>
                </div>
                <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg fill">location_on</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center text-center">
                  <div>
                    <p className="text-[10px] uppercase text-[#69499c] dark:text-[#a586d3] font-bold">Current Speed</p>
                    <p className="text-sm font-black text-[#130d1c] dark:text-white">{vehicle.speed}</p>
                  </div>
                  <div className="h-6 w-px bg-gray-200 dark:bg-gray-600 mx-2"></div>
                  <div>
                    <p className="text-[10px] uppercase text-[#69499c] dark:text-[#a586d3] font-bold">Heading</p>
                    <p className="text-sm font-black text-[#130d1c] dark:text-white">{vehicle.location.heading}</p>
                  </div>
                  <div className="h-6 w-px bg-gray-200 dark:bg-gray-600 mx-2"></div>
                  <div>
                    <p className="text-[10px] uppercase text-[#69499c] dark:text-[#a586d3] font-bold">Trip Time</p>
                    <p className="text-sm font-black text-[#130d1c] dark:text-white">1h 12m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthItem({ title, sub, status, warning }: { title: string, sub: string, status: string, warning?: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-[#f9f8fc] dark:hover:bg-white/5 rounded-xl transition-colors">
      <div className="flex items-center gap-3">
        <div className={cn("size-8 rounded-lg flex items-center justify-center", warning ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400")}>
          <span className="material-symbols-outlined text-[18px]">{warning ? 'warning' : 'check'}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-[#130d1c] dark:text-white">{title}</p>
          <p className="text-xs text-[#69499c] dark:text-[#a586d3]">{sub}</p>
        </div>
      </div>
      <span className={cn("text-xs font-medium", warning ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400")}>{status}</span>
    </div>
  );
}

function InspectionsTab() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto flex-1">
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex items-center gap-4">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">assignment</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">Total Logs</span>
              <span className="text-xl font-black text-[#130d1c] dark:text-white">24</span>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex items-center gap-4">
            <div className="size-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">Passed</span>
              <span className="text-xl font-black text-[#130d1c] dark:text-white">21</span>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex items-center gap-4">
            <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">Issues</span>
              <span className="text-xl font-black text-[#130d1c] dark:text-white">3</span>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap w-full md:w-auto">
          <span className="material-symbols-outlined">add_a_photo</span>
          New Inspection
        </button>
      </div>

      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-[11px] md:left-[19px] top-4 bottom-0 w-[2px] bg-[#d8cee8] dark:bg-[#3e3450]"></div>
        <div className="flex flex-col gap-8">
          {inspections.map((inspection, index) => (
            <div key={inspection.id} className={cn("relative group", index > 2 && "opacity-70 hover:opacity-100 transition-opacity")}>
              <div className={cn(
                "absolute -left-[23px] md:-left-[31px] top-5 size-[20px] rounded-full border-4 border-surface-light dark:border-surface-dark shadow-sm z-10",
                inspection.status === 'Failed' ? "bg-red-500" : inspection.status === 'Passed' ? "bg-emerald-500" : "bg-amber-500"
              )}></div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-[#130d1c] dark:text-white">{inspection.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-[#69499c] dark:text-[#a586d3] mt-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        <span>{inspection.date}</span>
                        <span className="w-1 h-1 bg-current rounded-full mx-1"></span>
                        <span className="material-symbols-outlined text-[16px]">person</span>
                        <span>{inspection.inspector}</span>
                      </div>
                    </div>
                    <StatusBadge status={inspection.status as any} />
                  </div>
                  {inspection.issue && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 text-sm text-[#130d1c] dark:text-white">
                      <p className="font-bold mb-1 text-red-800 dark:text-red-300">Issue Reported: {inspection.issue}</p>
                      <p className="opacity-80">{inspection.description}</p>
                    </div>
                  )}
                  {inspection.photos > 0 ? (
                    <div>
                      <p className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase mb-3">Inspection Photos ({inspection.photos})</p>
                      <div className="flex gap-3 overflow-x-auto gallery-scroll pb-2">
                        {[...Array(inspection.photos)].map((_, i) => (
                          <div key={i} className="flex-shrink-0 size-24 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border border-[#ece7f4] dark:border-[#3e3450]">
                            {i < 2 ? (
                              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPE-mA2i6HQdrIF_7ECrB3IU6230SKPs53F_xczfQuV2N8WRJN-G2AU8pnStD_Fo4Bt3mwih3kO5o98FMK-X1o0ISI3uqIz_F_xbw5ozPpjUcLoGrW4s5k-uoin03k6Y6mu5QtE7elHmUb3BWzijask41b4Aeo0TeIENbRIKeYvLNLlq1Yk2WC-I7kvV4h1IszdCAY2F97lOmNxAN_fES15G8nTVq7t1U9qcqd2DpC8JLu3bAUaphbzX2Mp-LG_AVx3GNhC71ugLI')" }} />
                            ) : (
                              <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white/50">image</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : inspection.status === 'Passed' && inspection.id === 4 ? (
                    <div className="text-xs text-[#69499c] dark:text-[#a586d3]">No photos attached.</div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-[#ece7f4] dark:border-[#3e3450] flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-[#130d1c] dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">car_repair</span>
              Service History
            </h2>
            <p className="text-sm text-[#69499c] dark:text-[#a586d3]">Maintenance records and repair invoices</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-transparent text-[#69499c] dark:text-[#a586d3] hover:text-primary hover:border-primary text-sm font-bold transition-all">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Add Service Record
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#f9f8fc] dark:bg-white/5 border-b border-[#ece7f4] dark:border-[#3e3450]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Service Type</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Provider</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Mileage</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Total Cost</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ece7f4] dark:divide-[#3e3450]">
              {serviceHistory.map((service, i) => (
                <tr key={i} className="hover:bg-[#f9f8fc] dark:hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#130d1c] dark:text-white">{service.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">{service.icon}</span>
                      </div>
                      <span className="text-sm font-bold text-[#130d1c] dark:text-white">{service.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#69499c] dark:text-[#a586d3]">{service.provider}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#130d1c] dark:text-white font-mono">{service.mileage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#130d1c] dark:text-white">{service.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-[#69499c] dark:text-[#a586d3] hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                      <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-[#ece7f4] dark:border-[#3e3450] flex justify-center">
          <button className="text-sm font-bold text-[#69499c] dark:text-[#a586d3] hover:text-primary transition-colors">Load older records</button>
        </div>
      </div>
    </div>
  );
}

function DocumentationTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#130d1c] dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">folder_open</span>
          Vehicle Documentation
        </h2>
        <button className="text-sm font-bold text-primary hover:underline">Manage Documents</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div key={doc.name} className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col gap-4 group">
            <div className="flex justify-between items-start">
              <div className={cn("size-12 rounded-xl flex items-center justify-center", doc.color === 'red' ? "bg-red-100 text-red-600" : doc.color === 'indigo' ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-600")}>
                <span className="material-symbols-outlined text-[24px]">{doc.icon}</span>
              </div>
              <StatusBadge status={doc.status as any} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#130d1c] dark:text-white">{doc.name}</h3>
              <p className="text-sm text-[#69499c] dark:text-[#a586d3] mt-1">{doc.provider}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-0.5">{doc.id}</p>
            </div>
            <div className="mt-auto pt-4 border-t border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-[#69499c] dark:text-[#a586d3]">Expires</span>
                <span className="text-[#130d1c] dark:text-white">{doc.expires}</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <div className={cn("h-1.5 rounded-full", doc.status === 'Expired' ? "bg-red-500 w-full" : "bg-emerald-500")} style={{ width: doc.status === 'Expired' ? '100%' : `${doc.progress}%` }}></div>
              </div>
              <p className={cn("text-[10px] text-right font-bold", doc.status === 'Expired' ? "text-red-600" : "text-emerald-600")}>{doc.remaining}</p>
            </div>
            <button className="w-full mt-2 py-2 rounded-lg bg-[#f9f8fc] dark:bg-white/5 text-[#130d1c] dark:text-white text-sm font-bold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined text-[18px]">{doc.status === 'Expired' ? 'upload' : 'download'}</span>
              {doc.status === 'Expired' ? 'Upload Renewal' : 'Download Document'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function VerificationsTab() {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 size-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div>
            <h3 className="text-[#69499c] dark:text-[#a586d3] text-xs font-bold uppercase tracking-wider mb-4">Current Status</h3>
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="size-4 rounded-full bg-blue-500 shadow-sm ring-2 ring-blue-200 dark:ring-blue-900"></span>
                  <span className="text-2xl font-black text-[#130d1c] dark:text-white">Blue Sticker</span>
                </div>
                <p className="text-sm font-medium text-[#69499c] dark:text-[#a586d3]">Engomado Azul • Plates 9 & 0</p>
              </div>
              <div className="flex flex-col items-end">
                <StatusBadge status="Valid" />
                <span className="text-[10px] text-[#69499c] dark:text-[#a586d3] mt-1">Exp: Dec 2024</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-rose-500">block</span>
              <span className="text-sm font-bold text-[#130d1c] dark:text-white">Restricted: Fridays</span>
            </div>
            <p className="text-xs text-[#69499c] dark:text-[#a586d3] leading-relaxed">
              This vehicle cannot circulate on Fridays from 5:00 to 22:00 according to local restrictions.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg">Verification Calendar 2024</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-[#69499c] dark:text-[#a586d3]">
                <span className="size-2 rounded-full bg-blue-500"></span> Period
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-[#69499c] dark:text-[#a586d3]">
                <span className="size-2 rounded-full bg-emerald-500"></span> Done
              </span>
            </div>
          </div>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 flex-1">
            {months.map((month, i) => {
              const isPeriod = month === 'MAY' || month === 'JUN' || month === 'NOV' || month === 'DEC';
              const isDone = month === 'JUN';
              return (
                <div key={month} className="flex flex-col gap-2 group relative">
                  {isDone && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <span className="block size-2 bg-emerald-500 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,1)] dark:shadow-[0_0_0_3px_rgba(45,36,58,1)]"></span>
                    </div>
                  )}
                  <div className={cn(
                    "h-24 rounded-xl border transition-colors flex flex-col items-center justify-center relative overflow-hidden",
                    isPeriod ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800" : "bg-gray-50 dark:bg-white/5 border-transparent",
                    isDone && "shadow-lg shadow-blue-500/10"
                  )}>
                    <span className={cn("text-xs font-bold", isPeriod ? "text-blue-700 dark:text-blue-300" : "text-gray-400")}>{month}</span>
                    {isPeriod && <span className="text-[10px] text-blue-600/60 dark:text-blue-400/60 font-medium mt-1">{month === 'MAY' || month === 'JUN' ? '1st' : '2nd'} Sem</span>}
                    {isDone && <span className="absolute bottom-2 right-2 material-symbols-outlined text-[14px] text-emerald-500">check_circle</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityTab() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col overflow-hidden">
      <div className="p-6 border-b border-[#ece7f4] dark:border-[#3e3450] flex flex-wrap gap-4 justify-between items-center bg-gray-50/50 dark:bg-surface-dark">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary text-[24px]">history</span>
          </div>
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg">Activity Log</h3>
            <p className="text-xs text-[#69499c] dark:text-[#a586d3]">Audit trail for today, Oct 24</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
            <input className="pl-10 pr-4 py-2 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-[#130d1c] dark:text-white w-48 md:w-64" placeholder="Search events..." type="text" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-sm font-bold text-[#69499c] dark:text-[#a586d3] transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter
          </button>
        </div>
      </div>
      <div className="flex flex-col divide-y divide-[#ece7f4] dark:divide-[#3e3450]">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 dark:bg-white/5 text-[11px] font-bold uppercase tracking-wider text-[#69499c] dark:text-[#a586d3]">
          <div className="col-span-2">Time</div>
          <div className="col-span-3">Event Type</div>
          <div className="col-span-4">Location</div>
          <div className="col-span-3">Details</div>
        </div>
        {activityLogs.map((log, i) => (
          <div key={i} className={cn("grid grid-cols-12 gap-4 px-6 py-4 items-center transition-colors group", log.priority ? "bg-red-50/50 dark:bg-red-900/10 border-l-4 border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20" : "hover:bg-gray-50 dark:hover:bg-white/5")}>
            <div className="col-span-2 text-sm font-medium text-[#130d1c] dark:text-white">{log.time}</div>
            <div className="col-span-3 flex items-center gap-3">
              <div className={cn("size-8 rounded-full flex items-center justify-center", log.status === 'success' ? "bg-emerald-100 text-emerald-600" : log.status === 'error' ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-600")}>
                <span className="material-symbols-outlined text-[16px]">{log.icon}</span>
              </div>
              <span className={cn("text-sm font-bold", log.status === 'error' ? "text-red-700 dark:text-red-400" : "text-[#130d1c] dark:text-white")}>{log.type}</span>
            </div>
            <div className="col-span-4 text-sm text-[#69499c] dark:text-[#a586d3] truncate">{log.location}</div>
            <div className="col-span-3 flex items-center gap-2">
              {log.priority && <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300">{log.priority}</span>}
              <span className="text-xs font-medium text-[#130d1c] dark:text-white">{log.details}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 dark:bg-white/5 border-t border-[#ece7f4] dark:border-[#3e3450] flex justify-between items-center">
        <span className="text-xs font-medium text-[#69499c] dark:text-[#a586d3]">Showing 5 of 124 events</span>
        <div className="flex gap-2">
          <button className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
