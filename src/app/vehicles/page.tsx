'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import StatusBadge from '@/components/StatusBadge';
import { vehicles } from '@/lib/mockData';
import { VehicleEditDrawer } from '@/components/VehicleEditDrawer';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function VehicleListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const filteredVehicles = vehicles.filter(v =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full h-full p-4 md:p-6 lg:p-8 gap-6">
      {/* Header Area */}
      <div className="flex flex-col gap-4 flex-shrink-0">
        <Breadcrumbs items={[{ name: 'Radar', href: '/vehicles' }, { name: 'Vehicle List' }]} />

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#130d1c] dark:text-white text-3xl md:text-4xl font-black tracking-tight text-balance">Vehicle List</h1>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm font-medium">
              Manage and monitor your entire fleet in real-time.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-white dark:bg-surface-dark border border-[#d8cee8] dark:border-[#3e3450] text-[#130d1c] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#362b45] transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export
            </button>
            <button
              onClick={() => {
                setSelectedVehicle(null);
                setIsDrawerOpen(true);
              }}
              className="flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Add Vehicle
            </button>
          </div>
        </div>
      </div>

      {/* Filters Area */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center flex-shrink-0">
        <div className="relative w-full md:w-96 group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#69499c] dark:text-[#a586d3] group-focus-within:text-primary transition-colors">search</span>
          <input
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-surface-dark border border-[#d8cee8] dark:border-[#3e3450] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-[#130d1c] dark:text-white placeholder-[#69499c]/70 dark:placeholder-[#a586d3]/70 shadow-sm transition-all"
            placeholder="Search by ID, Driver, or Model..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
          {['All Stores', 'All Zones', 'Status: All'].map((filter) => (
            <button key={filter} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-surface-dark text-sm font-medium text-[#69499c] dark:text-[#a586d3] hover:border-primary hover:text-primary transition-colors whitespace-nowrap shadow-sm">
              <span className="material-symbols-outlined text-[18px]">
                {filter.includes('Store') ? 'store' : filter.includes('Zone') ? 'map' : 'filter_list'}
              </span>
              {filter}
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          ))}
        </div>
      </div>

      {/* Table Area */}
      <div className="flex-1 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-[#ece7f4] dark:border-[#3e3450] overflow-hidden flex flex-col min-h-[400px]">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#f9f8fc] dark:bg-white/5 border-b border-[#ece7f4] dark:border-[#3e3450] text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider flex-shrink-0">
          <div className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-primary">
            Status
            <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
          </div>
          <div className="col-span-3">Vehicle Info</div>
          <div className="col-span-2">Current Driver</div>
          <div className="col-span-2">Location</div>
          <div className="col-span-2">Fuel & Sync</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredVehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/vehicles/${vehicle.id}`}
              className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#ece7f4] dark:border-[#3e3450] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group items-center cursor-pointer"
            >
              <div className="col-span-2">
                <StatusBadge status={vehicle.status} subtext={vehicle.speed || (vehicle as any).duration} />
              </div>
              <div className="col-span-3">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#130d1c] dark:text-white">{vehicle.name}</span>
                  <span className="text-xs text-[#69499c] dark:text-[#a586d3] font-mono">{vehicle.id} • {vehicle.type}</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  {vehicle.driver.avatar ? (
                    <div className="size-8 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700" style={{ backgroundImage: `url(${vehicle.driver.avatar})` }} />
                  ) : (
                    <div className="size-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold border border-indigo-200">
                      {vehicle.driver.initials}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#130d1c] dark:text-white">{vehicle.driver.name}</span>
                    <span className="text-[10px] text-[#69499c] dark:text-[#a586d3]">ID: {vehicle.driver.id}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#130d1c] dark:text-white truncate" title={vehicle.location.address}>{vehicle.location.address}</span>
                  <span className="text-xs text-[#69499c] dark:text-[#a586d3]">{vehicle.location.city}</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-[#130d1c] dark:text-white">{vehicle.fuel}%</span>
                    <span className="text-[10px] text-[#69499c] dark:text-[#a586d3]">{vehicle.lastUpdate}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div
                      className={cn("h-1.5 rounded-full transition-all", vehicle.fuel > 50 ? "bg-primary" : vehicle.fuel > 20 ? "bg-yellow-500" : "bg-red-500")}
                      style={{ width: `${vehicle.fuel}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex justify-end">
                <button
                  className="size-8 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 text-[#69499c] dark:text-[#a586d3] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedVehicle(vehicle);
                    setIsDrawerOpen(true);
                  }}
                >
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Area */}
        <div className="p-4 border-t border-[#ece7f4] dark:border-[#3e3450] flex items-center justify-between bg-white dark:bg-surface-dark flex-shrink-0">
          <span className="text-sm text-[#69499c] dark:text-[#a586d3]">
            Showing <span className="font-bold text-[#130d1c] dark:text-white">1-{filteredVehicles.length}</span> of <span className="font-bold text-[#130d1c] dark:text-white">{vehicles.length}</span> vehicles
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-[#d8cee8] dark:border-[#3e3450] text-[#69499c] dark:text-[#a586d3] hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-[#d8cee8] dark:border-[#3e3450] text-[#69499c] dark:text-[#a586d3] hover:bg-gray-50 dark:hover:bg-white/5">
              Next
            </button>
          </div>
        </div>
      </div>

      <VehicleEditDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        vehicleId={selectedVehicle?.id}
        initialData={selectedVehicle}
      />
    </div>
  );
}
