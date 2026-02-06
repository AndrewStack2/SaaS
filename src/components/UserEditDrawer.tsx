'use client';

import { Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '@/hooks/useTranslation';

interface UserEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  userData?: any;
}

export function UserEditDrawer({ isOpen, onClose, userData }: UserEditDrawerProps) {
  const { t } = useTranslation();
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 font-display" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-surface-dark shadow-2xl">
                    <div className="bg-gradient-to-r from-primary to-[#6d28d9] px-6 py-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <DialogTitle className="text-lg font-bold text-white">
                            {userData ? t('edit_member') : t('invite_new_member')}
                          </DialogTitle>
                          <p className="mt-1 text-sm text-purple-100">
                            {userData ? userData.email : t('enter_member_details')}
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

                    <div className="flex-1 px-6 py-8 space-y-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('full_name')}</label>
                        <input
                          type="text"
                          defaultValue={userData?.name || ""}
                          placeholder="e.g. John Doe"
                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('email_address')}</label>
                        <input
                          type="email"
                          defaultValue={userData?.email || ""}
                          placeholder="name@company.com"
                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">{t('role')}</label>
                        <select
                          defaultValue={userData?.role || "Viewer"}
                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                        >
                          <option>{t('admin')}</option>
                          <option>{t('manager')}</option>
                          <option>{t('viewer')}</option>
                          <option>{t('driver')}</option>
                        </select>
                        <p className="text-[10px] text-[#69499c] dark:text-[#a586d3] mt-1">
                          {t('role_desc')}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-[#ece7f4] dark:border-[#3e3450] px-6 py-4 bg-[#f9f8fc] dark:bg-white/5">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 px-4 py-2.5 text-sm font-bold text-[#69499c] dark:text-[#a586d3] bg-white dark:bg-surface-dark border border-[#d8cee8] dark:border-[#3e3450] rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                        >
                          {t('cancel')}
                        </button>
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                          {userData ? t('save_changes') : t('send_invitation')}
                        </button>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
