'use client';

import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#69499c] dark:text-[#a586d3] hover:text-primary font-medium flex items-center gap-1"
            >
              {item.name === 'Radar' && <span className="material-symbols-outlined text-[18px]">radar</span>}
              {item.name === 'Settings' && <span className="material-symbols-outlined text-[18px]">settings</span>}
              {item.name}
            </Link>
          ) : (
            <span className="text-[#130d1c] dark:text-white font-semibold">
              {item.name}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="material-symbols-outlined text-[#d8cee8] text-[16px]">chevron_right</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
