'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface UserEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  userData?: any;
}

export function UserEditDrawer({ isOpen, onClose, userData }: UserEditDrawerProps) {
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
                    <div className="bg-gradient-to-r from-primary to-[#6d28d9] px-6 py-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <Dialog.Title className="text-lg font-bold text-white">
                            {userData ? 'Edit Member' : 'Invite New Member'}
                          </Dialog.Title>
                          <p className="mt-1 text-sm text-purple-100">
                            {userData ? userData.email : 'Enter team member details below'}
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
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          defaultValue={userData?.name || ""}
                          placeholder="e.g. John Doe"
                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          defaultValue={userData?.email || ""}
                          placeholder="name@company.com"
                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase tracking-wider">Role</label>
                        <select
                          defaultValue={userData?.role || "Viewer"}
                          className="w-full text-sm rounded-xl border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 dark:text-white"
                        >
                          <option>Admin</option>
                          <option>Manager</option>
                          <option>Viewer</option>
                          <option>Driver</option>
                        </select>
                        <p className="text-[10px] text-[#69499c] dark:text-[#a586d3] mt-1">
                          Role determines what the user can see and do in the workspace.
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
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                          {userData ? 'Save Changes' : 'Send Invitation'}
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
