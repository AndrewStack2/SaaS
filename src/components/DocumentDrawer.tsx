'use client';

import React, { Fragment, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import StatusBadge from './StatusBadge';
import { useTranslation } from '@/hooks/useTranslation';

interface DocumentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleId?: string;
  documentToRenew?: any;
}

export function DocumentDrawer({ isOpen, onClose, vehicleId, documentToRenew }: DocumentDrawerProps) {
  const { t } = useTranslation();
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
                            {documentToRenew ? t('renew') : t('manage_documents')}
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
                        <p className="mt-1 text-sm text-[#69499c] dark:text-[#a586d3] text-balance">
                          {t('documents_desc')}
                        </p>
                      </div>

                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="space-y-6">
                          {documentToRenew && (
                            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 flex items-center gap-4">
                              <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center">
                                <span className="material-symbols-outlined">{documentToRenew.icon}</span>
                              </div>
                              <div>
                                <p className="text-sm font-bold text-red-800 dark:text-red-300">{t('Expired')}: {documentToRenew.name}</p>
                                <p className="text-xs text-red-600/70">ID: {documentToRenew.id}</p>
                              </div>
                            </div>
                          )}

                          {/* Document Type (if not renewing specific) */}
                          {!documentToRenew && (
                            <div className="flex flex-col gap-2">
                              <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('type')}</label>
                              <select
                                required
                                className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                              >
                                <option value="Insurance">{t('insurance_policies')}</option>
                                <option value="Circulation">Circulation Card</option>
                                <option value="Plates">License Plates Receipt</option>
                                <option value="Verification">Verification Certificate</option>
                                <option value="Other">Other Document</option>
                              </select>
                            </div>
                          )}

                          {/* New ID / Policy Number */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">ID / Policy #</label>
                            <input
                              type="text"
                              required
                              placeholder="..."
                              className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>

                          {/* Issuer / Provider */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('provider')}</label>
                            <input
                              type="text"
                              required
                              placeholder="..."
                              className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>

                          {/* Expiration Date */}
                          <div className="flex flex-col gap-2 text-balance">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('expires')}</label>
                            <input
                              type="date"
                              required
                              className="w-full px-4 py-2.5 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-white/5 text-[#130d1c] dark:text-white outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>

                          {/* File Upload */}
                          <div className="flex flex-col gap-2 text-balance">
                            <label className="text-sm font-bold text-[#130d1c] dark:text-white">{t('documents')}</label>
                            <div className="border-2 border-dashed border-[#d8cee8] dark:border-[#3e3450] rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer text-balance">
                              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-2xl">cloud_upload</span>
                              </div>
                              <div className="text-center">
                                <span className="text-sm font-bold text-primary block">{t('upload')}</span>
                              </div>
                              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">PDF, JPG, PNG</span>
                            </div>
                          </div>

                          {!documentToRenew && (
                            <div className="pt-4 text-balance">
                              <h4 className="text-xs font-black text-[#69499c] dark:text-[#a586d3] uppercase mb-3">{t('key_documents')}</h4>
                              <div className="space-y-2">
                                <DocumentMiniItem name="Insurance Policy" status="Active" expires="Dec 12, 2024" />
                                <DocumentMiniItem name="Circulation Card" status="Expired" expires="Oct 01, 2023" error />
                                <DocumentMiniItem name="License Plates" status="Valid" expires="May 2024" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4 gap-3">
                      <button
                        type="button"
                        className="rounded-xl border border-[#d8cee8] dark:border-[#3e3450] bg-white dark:bg-surface-dark px-6 py-2.5 text-sm font-bold text-[#130d1c] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                        onClick={onClose}
                      >
                          {t('cancel')}
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center rounded-xl bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors disabled:opacity-50"
                      >
                          {loading ? t('upload') : documentToRenew ? t('renew') : t('save')}
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

function DocumentMiniItem({ name, status, expires, error }: { name: string, status: string, expires: string, error?: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-all cursor-pointer group">
      <div className="flex items-center gap-3">
        <span className={cn("material-symbols-outlined text-lg", error ? "text-red-500" : "text-emerald-500")}>
          {error ? 'error' : 'check_circle'}
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#130d1c] dark:text-white">{name}</span>
          <span className="text-[10px] text-[#69499c] dark:text-[#a586d3]">Exp: {expires}</span>
        </div>
      </div>
      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary text-lg">download</span>
    </div>
  );
}
