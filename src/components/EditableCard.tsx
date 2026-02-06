'use client';

import { useState, Fragment } from 'react';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface EditableCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  onSave: (value: string | number) => Promise<void>;
  inputType?: 'text' | 'number' | 'select';
  options?: { label: string; value: string }[];
  subtitle?: string;
  progress?: number;
}

export function EditableCard({
  title,
  value,
  unit,
  icon,
  onSave,
  inputType = 'text',
  options,
  subtitle,
  progress
}: EditableCardProps) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const [isHovered, setIsHovered] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(tempValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  return (
    <div
      className={cn(
        "relative bg-surface-light dark:bg-surface-dark p-5 rounded-2xl border shadow-sm flex flex-col justify-between h-32 transition-all duration-200 overflow-hidden",
        isHovered ? "shadow-md border-primary/30" : "border-[#ece7f4] dark:border-[#3e3450]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Icon Decoration */}
      <div className="absolute -right-4 -bottom-4 text-primary/5 dark:text-white/5 pointer-events-none">
        <div className="scale-[4]">
          {icon}
        </div>
      </div>

      {/* Card Header */}
      <div className="flex items-center justify-between mb-1 z-10">
        <div className="flex items-center gap-2 text-[#69499c] dark:text-[#a586d3]">
          <div className="size-5 flex items-center justify-center">
            {icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">{title}</span>
        </div>

        {/* Edit Button - appears on hover */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={cn(
                  "p-1.5 rounded-lg transition-all outline-none",
                  isHovered || open ? "opacity-100 bg-primary/10 text-primary" : "opacity-0"
                )}
              >
                <PencilIcon className="h-3.5 w-3.5" />
              </PopoverButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute right-0 z-20 mt-2 w-64 origin-top-right">
                  <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5 bg-white dark:bg-surface-dark border border-[#ece7f4] dark:border-[#3e3450]">
                    <div className="p-4">
                      <label className="block text-xs font-bold text-[#69499c] dark:text-[#a586d3] uppercase mb-2 text-balance">
                        {t('edit')} {title}
                      </label>

                      {inputType === 'select' && options ? (
                        <select
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="w-full rounded-lg border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 text-sm dark:text-white"
                        >
                          {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={inputType}
                          value={tempValue}
                          onChange={(e) => setTempValue(
                            inputType === 'number' ? parseFloat(e.target.value) : e.target.value
                          )}
                          className="w-full rounded-lg border-[#d8cee8] dark:border-[#3e3450] bg-transparent focus:border-primary focus:ring-primary/20 text-sm dark:text-white"
                          autoFocus
                        />
                      )}

                      <div className="flex gap-2 mt-4">
                        <PopoverButton
                          as="button"
                          disabled={isSaving}
                          onClick={handleCancel}
                          className="flex-1 p-2 text-[10px] font-bold text-[#69499c] dark:text-[#a586d3] bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-1"
                        >
                          <XMarkIcon className="h-3 w-3" />
                          {t('cancel').toUpperCase()}
                        </PopoverButton>
                        <button
                          disabled={isSaving}
                          onClick={async () => {
                            await handleSave();
                          }}
                          className="flex-1 p-2 text-[10px] font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-1 shadow-sm"
                        >
                          {isSaving ? (
                            <span className="size-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <CheckIcon className="h-3 w-3" />
                              {t('save').toUpperCase()}
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      {/* Card Value */}
      <div className="z-10">
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-black text-[#130d1c] dark:text-white">{value}{unit && <span className="text-sm font-bold ml-0.5">{unit}</span>}</p>
        </div>
        {subtitle && (
          <p className="text-[10px] text-[#69499c] dark:text-[#a586d3] font-medium">{subtitle}</p>
        )}
      </div>

      {/* Progress Bar (Optional) */}
      {progress !== undefined && (
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-2 z-10 overflow-hidden">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Edit Indicator Overlay */}
      {isEditing && (
        <div className="absolute inset-0 rounded-2xl ring-2 ring-primary ring-inset pointer-events-none z-10" />
      )}
    </div>
  );
}
