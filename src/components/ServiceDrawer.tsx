'use client';

import React, { Fragment, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface ServiceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleId?: string;
}

export function ServiceDrawer({ isOpen, onClose, vehicleId }: ServiceDrawerProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    onClose();
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <form onSubmit={handleSubmit} className="flex h-full flex-col divide-y divide-[#ece7f4] dark:divide-[#3e3450] bg-white dark:bg-surface-dark shadow-xl">
                    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto py-6">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <DialogTitle className="text-xl font-black text-[#130d1c] dark:text-white">
                            Add Service Record
                          </DialogTitle>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white dark:bg-surface-dark text-gray-400 hover:text-gray-500 outline-none"
                              onClick={onClose}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-[#69499c] dark:text-[#a586d3]">
                          Log a new maintenance or repair activity for vehicle {vehicleId}.
                        </p>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="space-y-6">
                          {/* Date */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">Service Date</label>
                            <input
                              type="date"
                              required
                              className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>

                          {/* Service Type */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">Service Type</label>
                            <select
                              required
                              className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            >
                              <option value="Oil Change">Oil Change & Filters</option>
                              <option value="Tire Repair">Tire Rotation / Repair</option>
                              <option value="Brakes">Brake System</option>
                              <option value="Engine">Engine Diagnostic</option>
                              <option value="Suspension">Suspension</option>
                              <option value="Electrical">Electrical System</option>
                              <option value="Other">Other Maintenance</option>
                            </select>
                          </div>

                          {/* Provider */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">Service Provider</label>
                            <input
                              type="text"
                              placeholder="e.g. Nissan Service Center"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>

                          {/* Mileage */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                              <label className="text-sm font-bold text-[#130d1c] dark:text-white">Mileage (km)</label>
                              <input
                                type="number"
                                required
                                className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-sm font-bold text-[#130d1c] dark:text-white">Total Cost</label>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                <input
                                  type="number"
                                  step="0.01"
                                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">Notes / Description</label>
                            <textarea
                              rows={3}
                              className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                              placeholder="Describe the work performed..."
                            ></textarea>
                          </div>

                          {/* Invoice Upload */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">Invoice / Receipt</label>
                            <div className="border-2 border-dashed border-[#d8cee8] dark:border-[#3e3450] rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                              <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
                              <span className="text-sm font-medium text-[#69499c] dark:text-[#a586d3]">Click to upload or drag and drop</span>
                              <span className="text-xs text-gray-400 uppercase font-bold">PDF, JPG or PNG (max. 10MB)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4 gap-3">
                      <button
                        type="button"
                        className="rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-surface-dark px-6 py-2.5 text-sm font-bold text-[#130d1c] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                        onClick={onClose}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center rounded-xl bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors disabled:opacity-50"
                      >
                        {loading ? 'Saving...' : 'Save Record'}
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
