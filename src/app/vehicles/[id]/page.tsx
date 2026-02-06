'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import StatusBadge from '@/components/StatusBadge';
import StatsCard from '@/components/StatsCard';
import { EditableCard } from '@/components/EditableCard';
import { VehicleEditDrawer } from '@/components/VehicleEditDrawer';
import { InspectionDrawer } from '@/components/InspectionDrawer';
import { ServiceDrawer } from '@/components/ServiceDrawer';
import { DocumentDrawer } from '@/components/DocumentDrawer';
import { vehicles, inspections, serviceHistory, documents, activityLogs } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const vehicle = vehicles.find(v => v.id === id) || vehicles[0];
  const [activeTab, setActiveTab] = useState('Overview');
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [isInspectionDrawerOpen, setIsInspectionDrawerOpen] = useState(false);
  const [isServiceDrawerOpen, setIsServiceDrawerOpen] = useState(false);
  const [isDocumentDrawerOpen, setIsDocumentDrawerOpen] = useState(false);
  const [documentToRenew, setDocumentToRenew] = useState<any>(null);

  const tabs = [
    { key: 'Overview', name: t('overview'), icon: 'dashboard' },
    { key: 'Inspections', name: t('inspections'), icon: 'fact_check' },
    { key: 'Services', name: t('services'), icon: 'car_repair' },
    { key: 'Documentation', name: t('documentation'), icon: 'folder_open' },
    { key: 'Verifications', name: t('verifications'), icon: 'verified' },
    { key: 'Activity', name: t('activity'), icon: 'history' },
  ];

  return (
    <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto p-4 md:p-6 lg:p-8 gap-6">
      {/* Header section */}
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={[
          { name: t('radar'), href: '/vehicles' },
          { name: t('vehicle_list'), href: '/vehicles' },
          { name: `${vehicle.name} - ${vehicle.id}` }
        ]} />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight text-balance">{vehicle.name} - {vehicle.id}</h1>
              <StatusBadge status={vehicle.status} />
            </div>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">sync</span>
              {t('last_updated')}: {vehicle.lastUpdate} {t('via_gps')}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-white dark:bg-surface-dark border border-[#d8cee8] dark:border-[#3e3450] text-[#130d1c] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#362b45] transition-colors">
              <span className="material-symbols-outlined text-[18px]">share</span>
              {t('share')}
            </button>
            <button
              onClick={() => setIsEditDrawerOpen(true)}
              className="flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
              {t('edit_vehicle')}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="border-b border-[#d8cee8] dark:border-[#3e3450]">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "flex items-center gap-2 border-b-[3px] pb-3 px-1 transition-all whitespace-nowrap",
                activeTab === tab.key
                  ? "border-primary text-[#130d1c] dark:text-white"
                  : "border-transparent text-[#69499c] dark:text-[#a586d3] hover:text-primary"
              )}
            >
              <span className={cn("material-symbols-outlined text-[20px]", activeTab === tab.key && "fill")}>{tab.icon}</span>
              <span className="text-sm font-bold">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content section based on active tab */}
      <div className="flex flex-col gap-8 pb-10">
        {activeTab === 'Overview' && <OverviewTab vehicle={vehicle} />}
        {activeTab === 'Inspections' && <InspectionsTab vehicle={vehicle} onNewInspection={() => setIsInspectionDrawerOpen(true)} />}
        {activeTab === 'Services' && <ServicesTab onAddService={() => setIsServiceDrawerOpen(true)} />}
        {activeTab === 'Documentation' && (
          <DocumentationTab
            onManageDocs={() => { setDocumentToRenew(null); setIsDocumentDrawerOpen(true); }}
            onRenewDoc={(doc) => { setDocumentToRenew(doc); setIsDocumentDrawerOpen(true); }}
          />
        )}
        {activeTab === 'Verifications' && <VerificationsTab />}
        {activeTab === 'Activity' && <ActivityTab />}
      </div>

      <VehicleEditDrawer
        isOpen={isEditDrawerOpen}
        onClose={() => setIsEditDrawerOpen(false)}
        vehicleId={vehicle.id}
        initialData={vehicle}
      />

      <InspectionDrawer
        isOpen={isInspectionDrawerOpen}
        onClose={() => setIsInspectionDrawerOpen(false)}
        vehicleId={vehicle.id}
      />

      <ServiceDrawer
        isOpen={isServiceDrawerOpen}
        onClose={() => setIsServiceDrawerOpen(false)}
        vehicleId={vehicle.id}
      />

      <DocumentDrawer
        isOpen={isDocumentDrawerOpen}
        onClose={() => setIsDocumentDrawerOpen(false)}
        vehicleId={vehicle.id}
        documentToRenew={documentToRenew}
      />
    </div>
  );
}

function OverviewTab({ vehicle }: { vehicle: any }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 flex flex-col gap-6">
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <span className="material-symbols-outlined text-4xl text-[#d8cee8] dark:text-[#3e3450]">directions_car</span>
          </div>
          <div className="flex flex-col gap-1 z-10">
            <h3 className="text-[#69499c] dark:text-[#a586d3] text-xs font-bold uppercase tracking-wider">{t('vehicle_model')}</h3>
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
              <p className="text-xs text-[#69499c] dark:text-[#a586d3] font-bold uppercase">{t('assigned_driver')}</p>
              <p className="text-sm font-bold text-[#130d1c] dark:text-white">{vehicle.driver.name}</p>
              {vehicle.driver.rating && (
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-yellow-400 text-[14px] fill">star</span>
                  <span className="text-xs font-medium text-[#130d1c] dark:text-white">{vehicle.driver.rating} {t('rating')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#130d1c] dark:text-white font-bold text-base">{t('key_documents')}</h3>
            <button className="text-primary text-xs font-bold hover:underline">{t('view_all')}</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {documents.slice(0, 2).map((doc) => (
              <div key={doc.name} className="flex flex-col gap-2 p-3 rounded-xl bg-[#f9f8fc] dark:bg-white/5 border border-transparent hover:border-primary/30 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div className={cn("size-8 rounded-lg flex items-center justify-center", doc.color === 'red' ? "bg-red-100 text-red-600" : doc.color === 'indigo' ? "bg-indigo-100 text-indigo-600" : "bg-blue-100 text-blue-600")}>
                    <span className="material-symbols-outlined text-[18px]">{doc.icon}</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 text-[16px] group-hover:text-primary">{t('download')}</span>
                </div>
                <p className="text-xs font-medium text-[#130d1c] dark:text-white truncate">{doc.name}.pdf</p>
                <p className="text-[10px] text-[#69499c] dark:text-[#a586d3]">{t('expires')}: Dec 2024</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <EditableCard
            title={t('fuel_level')}
            value={vehicle.fuel || 0}
            unit="%"
            subtitle="~340 km range"
            icon={<span className="material-symbols-outlined">local_gas_station</span>}
            progress={vehicle.fuel || 0}
            inputType="number"
            onSave={async (val) => { console.log('Saving fuel:', val); }}
          />
          <EditableCard
            title={t('odometer')}
            value={(vehicle.odometer || 0).toLocaleString()}
            unit="km"
            subtitle={t('total_logs')}
            icon={<span className="material-symbols-outlined">speed</span>}
            inputType="number"
            onSave={async (val) => { console.log('Saving odometer:', val); }}
          />
          <EditableCard
            title={t('battery')}
            value={vehicle.battery || '12.6V'}
            subtitle={t('Valid')}
            icon={<span className="material-symbols-outlined">battery_charging_full</span>}
            onSave={async (val) => { console.log('Saving battery:', val); }}
          />
          <EditableCard
            title={t('efficiency')}
            value={vehicle.efficiency || 0}
            unit="km/l"
            subtitle={t('overview')}
            icon={<span className="material-symbols-outlined">eco</span>}
            inputType="number"
            onSave={async (val) => { console.log('Saving efficiency:', val); }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col">
            <div className="p-5 border-b border-[#ece7f4] dark:border-[#3e3450] flex justify-between items-center">
              <h3 className="text-[#130d1c] dark:text-white font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">health_and_safety</span>
                {t('vehicle_health')}
              </h3>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-md">{vehicle.health}/100</span>
            </div>
            <div className="p-2 flex flex-col">
              <HealthItem title={t('engine_status')} sub={t('Moving')} status="OK" />
              <HealthItem title={t('braking_system')} sub={t('braking_system_status')} status="OK" />
              <HealthItem title={t('tire_pressure')} sub={t('tire_pressure_status')} status="Check" warning />
            </div>
            <div className="p-4 mt-auto">
              <button className="w-full py-2 rounded-lg border border-[#d8cee8] dark:border-[#3e3450] text-[#69499c] dark:text-[#a586d3] text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#362b45] transition-colors">
                {t('full_diagnostic')}
              </button>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col overflow-hidden h-full">
            <div className="p-5 border-b border-[#ece7f4] dark:border-[#3e3450] flex justify-between items-center z-10 bg-surface-light dark:bg-surface-dark">
              <h3 className="text-[#130d1c] dark:text-white font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">near_me</span>
                {t('live_location')}
              </h3>
              <button className="text-primary hover:text-primary/80">
                <span className="material-symbols-outlined">{t('fullscreen')}</span>
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
                    <p className="text-[10px] uppercase text-[#69499c] dark:text-[#a586d3] font-bold">{t('current_speed')}</p>
                    <p className="text-sm font-black text-[#130d1c] dark:text-white">{vehicle.speed}</p>
                  </div>
                  <div className="h-6 w-px bg-gray-200 dark:bg-gray-600 mx-2"></div>
                  <div>
                    <p className="text-[10px] uppercase text-[#69499c] dark:text-[#a586d3] font-bold">{t('heading')}</p>
                    <p className="text-sm font-black text-[#130d1c] dark:text-white">{vehicle.location.heading}</p>
                  </div>
                  <div className="h-6 w-px bg-gray-200 dark:bg-gray-600 mx-2"></div>
                  <div>
                    <p className="text-[10px] uppercase text-[#69499c] dark:text-[#a586d3] font-bold">{t('trip_time')}</p>
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
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between p-3 hover:bg-[#f9f8fc] dark:hover:bg-white/5 rounded-xl transition-colors">
      <div className="flex items-center gap-3">
        <div className={cn("size-8 rounded-lg flex items-center justify-center", warning ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400")}>
          <span className="material-symbols-outlined text-[18px]">{warning ? 'warning' : 'check'}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-[#130d1c] dark:text-white">{title}</p>
          <p className="text-xs text-[#69499c] dark:text-[#a586d3]">{t(sub as any) || sub}</p>
        </div>
      </div>
      <span className={cn("text-xs font-medium", warning ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400")}>{status}</span>
    </div>
  );
}

function InspectionsTab({ vehicle, onNewInspection }: { vehicle: any, onNewInspection: () => void }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto flex-1">
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex items-center gap-4">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">assignment</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">{t('total_logs')}</span>
              <span className="text-xl font-black text-[#130d1c] dark:text-white">24</span>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex items-center gap-4">
            <div className="size-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">{t('passed')}</span>
              <span className="text-xl font-black text-[#130d1c] dark:text-white">21</span>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex items-center gap-4">
            <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">{t('issues')}</span>
              <span className="text-xl font-black text-[#130d1c] dark:text-white">3</span>
            </div>
          </div>
        </div>
        <button
          onClick={onNewInspection}
          className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap w-full md:w-auto"
        >
          <span className="material-symbols-outlined">add_a_photo</span>
          {t('new_inspection')}
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
                      <p className="font-bold mb-1 text-red-800 dark:text-red-300">{t('issues')}: {inspection.issue}</p>
                      <p className="opacity-80">{inspection.description}</p>
                    </div>
                  )}
                  {inspection.photos > 0 ? (
                    <div>
                      <p className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase mb-3">{t('inspection_photos')} ({inspection.photos})</p>
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
                    <div className="text-xs text-[#69499c] dark:text-[#a586d3]">{t('no_photos_attached')}</div>
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

function ServicesTab({ onAddService }: { onAddService: () => void }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-[#ece7f4] dark:border-[#3e3450] flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-[#130d1c] dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">car_repair</span>
              {t('service_history')}
            </h2>
            <p className="text-sm text-[#69499c] dark:text-[#a586d3]">{t('maintenance_records_desc')}</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-transparent text-[#69499c] dark:text-[#a586d3] hover:text-primary hover:border-primary text-sm font-bold transition-all">
              <span className="material-symbols-outlined text-[20px]">download</span>
              {t('export_csv')}
            </button>
            <button
              onClick={onAddService}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              {t('add_service_record')}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#f9f8fc] dark:bg-white/5 border-b border-[#ece7f4] dark:border-[#3e3450]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('date')}</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('service_type')}</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('provider')}</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('mileage')}</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('total_cost')}</th>
                <th className="px-6 py-4 text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider text-right">{t('invoice')}</th>
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
          <button className="text-sm font-bold text-[#69499c] dark:text-[#a586d3] hover:text-primary transition-colors">{t('load_older_records')}</button>
        </div>
      </div>
    </div>
  );
}

function DocumentationTab({ onManageDocs, onRenewDoc }: { onManageDocs: () => void, onRenewDoc: (doc: any) => void }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#130d1c] dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">folder_open</span>
          {t('vehicle_documentation')}
        </h2>
        <button
          onClick={onManageDocs}
          className="text-sm font-bold text-primary hover:underline"
        >
          {t('manage_documents')}
        </button>
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
                <span className="text-[#69499c] dark:text-[#a586d3]">{t('expires')}</span>
                <span className="text-[#130d1c] dark:text-white">{doc.expires}</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <div className={cn("h-1.5 rounded-full", doc.status === 'Expired' ? "bg-red-500 w-full" : "bg-emerald-500")} style={{ width: doc.status === 'Expired' ? '100%' : `${doc.progress}%` }}></div>
              </div>
              <p className={cn("text-[10px] text-right font-bold", doc.status === 'Expired' ? "text-red-600" : "text-emerald-600")}>{doc.remaining}</p>
            </div>
            <button
              onClick={() => doc.status === 'Expired' ? onRenewDoc(doc) : null}
              className="w-full mt-2 py-2 rounded-lg bg-[#f9f8fc] dark:bg-white/5 text-[#130d1c] dark:text-white text-sm font-bold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
            >
              <span className="material-symbols-outlined text-[18px]">{doc.status === 'Expired' ? 'upload' : 'download'}</span>
              {doc.status === 'Expired' ? t('upload_renewal') : t('download_document')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function VerificationsTab() {
  const { t } = useTranslation();
  const months = [
    t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'),
    t('jul'), t('aug'), t('sep'), t('oct'), t('nov'), t('dec')
  ];
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 size-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div>
            <h3 className="text-[#69499c] dark:text-[#a586d3] text-xs font-bold uppercase tracking-wider mb-4">{t('current_status')}</h3>
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="size-4 rounded-full bg-blue-500 shadow-sm ring-2 ring-blue-200 dark:ring-blue-900"></span>
                  <span className="text-2xl font-black text-[#130d1c] dark:text-white">{t('engomado_blue').split(' • ')[0]}</span>
                </div>
                <p className="text-sm font-medium text-[#69499c] dark:text-[#a586d3]">{t('engomado_blue')}</p>
              </div>
              <div className="flex flex-col items-end">
                <StatusBadge status="Valid" />
                <span className="text-[10px] text-[#69499c] dark:text-[#a586d3] mt-1">{t('expires')}: Dec 2024</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-rose-500">block</span>
              <span className="text-sm font-bold text-[#130d1c] dark:text-white">{t('restricted_fridays')}</span>
            </div>
            <p className="text-xs text-[#69499c] dark:text-[#a586d3] leading-relaxed">
              {t('restricted_fridays_desc')}
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg">{t('verification_calendar')}</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-[#69499c] dark:text-[#a586d3]">
                <span className="size-2 rounded-full bg-blue-500"></span> {t('period')}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-[#69499c] dark:text-[#a586d3]">
                <span className="size-2 rounded-full bg-emerald-500"></span> {t('done')}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 flex-1">
            {months.map((month, i) => {
              const monthKeys = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
              const currentKey = monthKeys[i];
              const isPeriod = currentKey === 'may' || currentKey === 'jun' || currentKey === 'nov' || currentKey === 'dec';
              const isDone = currentKey === 'jun';
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
                    {isPeriod && <span className="text-[10px] text-blue-600/60 dark:text-blue-400/60 font-medium mt-1">{(currentKey === 'may' || currentKey === 'jun') ? t('first_sem') : t('second_sem')}</span>}
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
  const { t } = useTranslation();
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#ece7f4] dark:border-[#3e3450] shadow-sm flex flex-col overflow-hidden">
      <div className="p-6 border-b border-[#ece7f4] dark:border-[#3e3450] flex flex-wrap gap-4 justify-between items-center bg-gray-50/50 dark:bg-surface-dark">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary text-[24px]">history</span>
          </div>
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg">{t('activity_log')}</h3>
            <p className="text-xs text-[#69499c] dark:text-[#a586d3]">{t('audit_trail_today')}, {t('oct')} 24</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
            <input className="pl-10 pr-4 py-2 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-[#130d1c] dark:text-white w-48 md:w-64" placeholder={t('search_events')} type="text" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-sm font-bold text-[#69499c] dark:text-[#a586d3] transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            {t('filter')}
          </button>
        </div>
      </div>
      <div className="flex flex-col divide-y divide-[#ece7f4] dark:divide-[#3e3450]">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 dark:bg-white/5 text-[11px] font-bold uppercase tracking-wider text-[#69499c] dark:text-[#a586d3]">
          <div className="col-span-2">{t('time')}</div>
          <div className="col-span-3">{t('event_type')}</div>
          <div className="col-span-4">{t('location')}</div>
          <div className="col-span-3">{t('details')}</div>
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
              {log.priority && <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300">{log.priority === 'High Priority' ? t('high_priority') : log.priority}</span>}
              <span className="text-xs font-medium text-[#130d1c] dark:text-white">{log.details}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 dark:bg-white/5 border-t border-[#ece7f4] dark:border-[#3e3450] flex justify-between items-center">
        <span className="text-xs font-medium text-[#69499c] dark:text-[#a586d3]">{t('showing')} 5 {t('of')} 124 {t('search_events')}</span>
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
