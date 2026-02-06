'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface InspectionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleId?: string;
}

export function InspectionDrawer({ isOpen, onClose, vehicleId }: InspectionDrawerProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 font-display" onClose={onClose}>
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
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <Dialog.Title className="text-lg font-bold text-white">
                            New Inspection
                          </Dialog.Title>
                          <p className="mt-1 text-sm text-emerald-100">
                            Vehicle ID: {vehicleId || 'N/A'}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="rounded-md text-emerald-100 hover:text-white transition-colors"
                          onClick={onClose}
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 px-6 py-8 space-y-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Inspection Type</label>
                        <select className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-emerald-500 focus:ring-emerald-500/20 dark:text-white">
                          <option>Daily Pre-Trip</option>
                          <option>Post-Trip</option>
                          <option>Monthly Maintenance</option>
                          <option>Service Return</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Status</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="status" className="text-emerald-600 focus:ring-emerald-500" defaultChecked />
                            <span className="text-sm font-medium dark:text-white">Passed</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="status" className="text-red-600 focus:ring-red-500" />
                            <span className="text-sm font-medium dark:text-white">Failed</span>
                          </label>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Notes / Issues</label>
                        <textarea
                          rows={4}
                          placeholder="Describe any issues found..."
                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-emerald-500 focus:ring-emerald-500/20 dark:text-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Photos</label>
                        <div className="size-24 rounded-2xl border-2 border-dashed border-[#d8cee8] dark:border-[#3e3450] flex flex-col items-center justify-center text-[#69499c] dark:text-[#a586d3] hover:border-emerald-500 hover:text-emerald-500 transition-colors cursor-pointer bg-[#f9f8fc] dark:bg-white/5">
                          <span className="material-symbols-outlined">add_a_photo</span>
                          <span className="text-[10px] font-bold mt-1">UPLOAD</span>
                        </div>
                      </div>
                    </div>

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
                          className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                        >
                          Submit Inspection
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
