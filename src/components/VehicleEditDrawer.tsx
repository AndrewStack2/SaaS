'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface VehicleEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleId?: string;
  initialData?: any;
}

export function VehicleEditDrawer({ isOpen, onClose, vehicleId, initialData }: VehicleEditDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('general');

  const sections = [
    { id: 'general', title: 'General Information', icon: '🚗' },
    { id: 'metrics', title: 'Vehicle Metrics', icon: '⚡' },
    { id: 'health', title: 'Health Status', icon: '💚' },
    { id: 'driver', title: 'Driver Assignment', icon: '👤' },
    { id: 'documents', title: 'Documents', icon: '📄' },
  ];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 font-display" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-surface-dark shadow-2xl">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-[#6d28d9] px-6 py-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <Dialog.Title className="text-lg font-bold text-white">
                            {vehicleId ? 'Edit Vehicle' : 'Add New Vehicle'}
                          </Dialog.Title>
                          <p className="mt-1 text-sm text-purple-100">
                            {initialData ? `${initialData.id} • ${initialData.name}` : 'Enter vehicle details below'}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="rounded-md text-purple-100 hover:text-white transition-colors"
                          onClick={onClose}
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 py-6">
                      <div className="space-y-3">
                        {sections.map((section) => (
                          <div
                            key={section.id}
                            className="border border-[#ece7f4] dark:border-[#3e3450] rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
                          >
                            <button
                              onClick={() => setExpandedSection(
                                expandedSection === section.id ? null : section.id
                              )}
                              className="w-full flex items-center justify-between px-4 py-3 bg-[#f9f8fc] dark:bg-white/5 hover:bg-[#f3f0f9] dark:hover:bg-white/10 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{section.icon}</span>
                                <span className="font-bold text-sm text-[#130d1c] dark:text-white">{section.title}</span>
                              </div>
                              <ChevronRightIcon
                                className={`h-4 w-4 text-[#69499c] dark:text-[#a586d3] transition-transform ${
                                  expandedSection === section.id ? 'rotate-90' : ''
                                }`}
                              />
                            </button>

                            <Transition
                              show={expandedSection === section.id}
                              enter="transition-all duration-200"
                              enterFrom="max-h-0 opacity-0"
                              enterTo="max-h-[500px] opacity-100"
                              leave="transition-all duration-200"
                              leaveFrom="max-h-[500px] opacity-100"
                              leaveTo="max-h-0 opacity-0"
                            >
                              <div className="px-4 py-4 space-y-4 bg-white dark:bg-surface-dark">
                                {section.id === 'general' && (
                                  <>
                                    <div className="flex flex-col gap-1.5">
                                      <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">
                                        Vehicle Name/Model
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue={initialData?.name || "Nissan Versa 2023"}
                                        className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">
                                        License Plate
                                      </label>
                                      <input
                                        type="text"
                                        defaultValue={initialData?.id || "FLT-029"}
                                        className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">
                                        Type
                                      </label>
                                      <select className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white">
                                        <option>Sedan</option>
                                        <option>SUV</option>
                                        <option>Van</option>
                                        <option>Truck</option>
                                      </select>
                                    </div>
                                  </>
                                )}

                                {section.id === 'metrics' && (
                                  <>
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">
                                          Fuel Level (%)
                                        </label>
                                        <input
                                          type="number"
                                          defaultValue={initialData?.fuel || 78}
                                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">
                                          Battery (V)
                                        </label>
                                        <input
                                          type="number"
                                          defaultValue="12.6"
                                          step="0.1"
                                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                      <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">
                                        Odometer (km)
                                      </label>
                                      <input
                                        type="number"
                                        defaultValue={initialData?.odometer || 45231}
                                        className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                                      />
                                    </div>
                                  </>
                                )}

                                {section.id === 'driver' && (
                                  <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase">
                                      Assign Driver
                                    </label>
                                    <select className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white">
                                      <option>Juan Pérez</option>
                                      <option>Maria Garcia</option>
                                      <option>Carlos Ruiz</option>
                                      <option>Unassigned</option>
                                    </select>
                                  </div>
                                )}

                                {/* Add placeholder for other sections */}
                                {(section.id === 'health' || section.id === 'documents') && (
                                  <p className="text-xs text-[#69499c] dark:text-[#a586d3]">Detailed {section.title.toLowerCase()} settings coming soon...</p>
                                )}
                              </div>
                            </Transition>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="border-t border-[#ece7f4] dark:border-[#3e3450] px-6 py-4 bg-[#f9f8fc] dark:bg-white/5">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 px-4 py-2.5 text-sm font-bold text-[#69499c] dark:text-[#a586d3] bg-white dark:bg-surface-dark border border-[#d8cee8] dark:border-[#3e3450] rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
