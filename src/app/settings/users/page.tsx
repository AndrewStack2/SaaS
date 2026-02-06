'use client';

import React, { useState } from 'react';
import { users } from '@/lib/mockData';
import StatusBadge from '@/components/StatusBadge';
import { UserEditDrawer } from '@/components/UserEditDrawer';

export default function UserManagementPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[#ece7f4] dark:border-[#3e3450] pb-4">
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg text-balance">Team Members</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1">Manage who has access to the dashboard.</p>
          </div>
          <button
            onClick={() => {
              setSelectedUser(null);
              setIsDrawerOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary dark:text-white rounded-lg text-sm font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Invite User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs text-[#69499c] dark:text-[#a586d3] border-b border-[#ece7f4] dark:border-[#3e3450]">
                <th className="font-semibold py-3 pl-2 pr-4">User</th>
                <th className="font-semibold py-3 px-4">Role</th>
                <th className="font-semibold py-3 px-4">Status</th>
                <th className="font-semibold py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user, i) => (
                <tr key={i} className="group border-b border-[#ece7f4] dark:border-[#3e3450] hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 pl-2 pr-4">
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <div className="size-9 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-[#2d243a]" style={{ backgroundImage: `url(${user.avatar})` }} />
                      ) : (
                        <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {user.initials}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="font-bold text-[#130d1c] dark:text-white">{user.name}</span>
                        <span className="text-xs text-[#69499c] dark:text-[#a586d3]">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge status={user.role as any} />
                  </td>
                  <td className="py-4 px-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                      <div className="size-1.5 rounded-full bg-emerald-500"></div>
                      {user.status}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setIsDrawerOpen(true);
                      }}
                      className="text-[#69499c] hover:text-primary dark:text-[#a586d3] dark:hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-[#ece7f4] dark:border-[#3e3450] flex flex-col gap-6">
        <div className="flex items-start justify-between border-b border-[#ece7f4] dark:border-[#3e3450] pb-4">
          <div>
            <h3 className="text-[#130d1c] dark:text-white font-bold text-lg text-balance">Role Permissions</h3>
            <p className="text-[#69499c] dark:text-[#a586d3] text-sm mt-1 text-balance">Customize what each role can access and modify.</p>
          </div>
          <span className="material-symbols-outlined text-[#d8cee8] dark:text-[#3e3450] text-3xl">lock_person</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-[#69499c] dark:text-[#a586d3]">
                <th className="font-bold py-3 pl-2 pr-4 w-1/3">Access Level</th>
                <th className="font-bold py-3 px-4 text-center">Admin</th>
                <th className="font-bold py-3 px-4 text-center">Manager</th>
                <th className="font-bold py-3 px-4 text-center">Viewer</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-[#ece7f4] dark:divide-[#3e3450]">
              {[
                { name: 'Radar & Tracking', desc: 'View real-time vehicle locations' },
                { name: 'Report Generation', desc: 'Create and export fleet analytics' },
                { name: 'Global Settings', desc: 'Manage branding and billing' },
                { name: 'Driver Management', desc: 'Add, edit, or remove driver profiles' },
              ].map((perm) => (
                <tr key={perm.name}>
                  <td className="py-4 pl-2 pr-4">
                    <div className="font-bold text-[#130d1c] dark:text-white">{perm.name}</div>
                    <div className="text-xs text-[#69499c] dark:text-[#a586d3] mt-0.5">{perm.desc}</div>
                  </td>
                  <td className="px-4 text-center">
                    <input defaultChecked disabled className="size-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-not-allowed opacity-50" type="checkbox" />
                  </td>
                  <td className="px-4 text-center">
                    <input defaultChecked className="size-4 rounded border-[#d8cee8] dark:border-[#3e3450] text-primary focus:ring-primary/20 bg-transparent" type="checkbox" />
                  </td>
                  <td className="px-4 text-center">
                    <input className="size-4 rounded border-[#d8cee8] dark:border-[#3e3450] text-primary focus:ring-primary/20 bg-transparent" type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <UserEditDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        userData={selectedUser}
      />
    </div>
  );
}
